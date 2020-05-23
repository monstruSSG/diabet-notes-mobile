const elementsTheme = {
    colors: {
        primary: '#303f9f',
        secondary: '#001970',
        grey0: '#f5f5f5',
        grey1: '#bdbdbd',
        grey2: '#373737',
        searchBg: '#666ad1',
        success: '#00600f',
        error: '#f4511e',
        warning: '#fdd835'
    },
    Button: {
        raised: true,
        containerStyle: [{
            width: '100%',
        }]
    },
    Card: {
        titleStyle: [{
            color: '#373737'
        }]
    },
    SocialIcon: {
        style: {
            width: '100%',
        }
    },
    Header: {
        containerStyle: [{
            paddingTop: 0,
            marginTop: 0,
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }],
        centerContainerStyle: [{
        }]
    }
};

export default elementsTheme;