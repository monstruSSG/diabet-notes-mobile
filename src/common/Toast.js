import Toast from 'react-native-root-toast';

export const success = text => Toast.show(text, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor: '#00600f',
    delay: 0
});

export const warning = text => Toast.show(text, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor: '#fdd835',
    delay: 0
});

export const error = text => Toast.show(text, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor: '#f4511e',
    delay: 0
});

