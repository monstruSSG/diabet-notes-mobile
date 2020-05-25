import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, Button, ListItem } from 'react-native-elements';
import { StackedBarChart, YAxis, LineChart, Grid } from 'react-native-svg-charts';
import moment from 'moment'

import * as REPORTS_REQUESTS from '../../requests/report'

const ValuesAverage = values => {
    const data = values && values.length ? values.map(value => Number(value)) : []

    const contentInset = { top: 20, bottom: 20 }

    return (
        <View style={{ height: 200, flexDirection: 'row' }}>
            <YAxis
                data={data}
                contentInset={contentInset}
                svg={{
                    fill: 'grey',
                    fontSize: 10,
                }}
                numberOfTicks={10}
                formatLabel={(value) => `${value}`}
            />
            <LineChart
                style={{ flex: 1, marginLeft: 16 }}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={contentInset}
            >
                <Grid />
            </LineChart>
        </View>
    )
}

const HipoHiperNormalChart = values => {
    const data = values && values.length ? values.map(value => {
        let date = moment(value.date)
        let day = date.day()
        let year = date.year()
        let month = date.month()

        return {
            hipo: value.low,
            hiper: value.high,
            good: value.good,
            day: new Date(year, month, day)
        }
    }) : []

    const colors = ['#f4511e', '#7cb342', '#fdd835']
    const keys = ['hipo', 'good', 'hiper']

    return (
        <StackedBarChart
            style={{ height: 200 }}
            keys={keys}
            colors={colors}
            data={data}
            showGrid={false}
            contentInset={{ top: 30, bottom: 30 }}
        />
    )
}

const Values = values => {
    let items = values && values.length ? values : []

    return (
        <>
            {items.map((item, index) => <ListItem
                key={index}
                title={item.value}
                subtitle={item.comment}
                bottomDivider
                rightTitle={`${item.fastInsulin}/${item.slowInsulin}`}
                rightSubtitle='Rapida/Lenta'
                badge={{ badgeStyle: { backgroundColor: '#f4511e' } }}
            />)}
        </>
    )
}

const Overview = props => {
    let [reports, setReports] = useState({})

    useEffect(() => {
        getReports()
    }, [])

    let getReports = () => REPORTS_REQUESTS.get()
        .then(setReports)

    return (
        <ScrollView style={[styles.container]}>
            <Card
                title='Last 7 days'
            >
                {HipoHiperNormalChart(reports.lastDaysCount)}
                <Button title='Notes' onPress={() => props.navigation.navigate('Values')} />
            </Card>
            <Card
                title='Last 7 days'
            >
                {ValuesAverage(reports.allValues)}
                <Button title='Notes' onPress={() => props.navigation.navigate('Values')} />
            </Card>
            <Card
                title='Today values'
            >
                {Values(reports.todayValues)}
                <Button title='Notes' onPress={() => props.navigation.navigate('Values')} />
            </Card>
        </ScrollView>
    );
}

let styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
})

export default Overview;