import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, Button, ListItem } from 'react-native-elements';
import { StackedBarChart, YAxis, LineChart, Grid } from 'react-native-svg-charts';

const ValuesAverage = props => {
    const data = [100, 200, 333, -50, 100, 200, 155]

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

const HipoHiperNormalChart = props => {
    const data = [
        {
            month: new Date(2015, 0, 1),
            hipo: 2,
            good: 10,
            hiper: 5
        },
        {
            month: new Date(2015, 1, 1),
            hipo: 2,
            good: 5,
            hiper: 5
        },
        {
            month: new Date(2015, 2, 1),
            hipo: 4,
            good: 3,
            hiper: 2
        },
        {
            month: new Date(2015, 2, 1),
            hipo: 5,
            good: 2,
            hiper: 6
        },
        {
            month: new Date(2015, 2, 1),
            hipo: 2,
            good: 3,
            hiper: 5
        },
        {
            month: new Date(2015, 2, 1),
            hipo: 2,
            good: 3,
            hiper: 5
        },
        {
            month: new Date(2015, 2, 1),
            hipo: 2,
            good: 3,
            hiper: 5
        }
    ]

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

const Values = props => {
    let items = [
        {
            name: '100 g/100mg',
            subtitle: 'Vice President'
        }, {
            name: '100 g/100mg',
            subtitle: 'Vice President'
        }, {
            name: '100 g/100mg',
            subtitle: 'Vice President'
        }, {
            name: '100 g/100mg',
            subtitle: 'Vice President'
        }, {
            name: '100 g/100mg',
            subtitle: 'Vice President'
        }, {
            name: '100 g/100mg',
            subtitle: 'Vice President'
        },
    ]

    return (
        <>
            {items.map((item, index) => <ListItem
                key={index}
                title={item.name}
                subtitle={item.subtitle}
                bottomDivider
            />)}
        </>
    )
}

const Overview = props => {
    return (
        <ScrollView style={[styles.container]}>
            <Card
                title='Last 7 days'
            >
                {HipoHiperNormalChart()}
                <Button title='Notes' />
            </Card>
            <Card
                title='Last 7 days'
            >
                {ValuesAverage()}
                <Button title='Notes' />
            </Card>
            <Card
                title='Last 7 days'
            >
                {HipoHiperNormalChart()}
                <Button title='Notes' />
            </Card>
            <Card
                title='Today values'
            >
                {Values()}
                <Button title='Notes' />
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