import { StyleSheet } from 'react-native';

let cor = '#9c44dc';
let appMargin = 20;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      paddingTop: 50,
      width: '100%',
      backgroundColor: cor,
    },
    icons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: appMargin,
      paddingBottom: 20,
    },
    hello: {
      marginHorizontal: appMargin,
      marginBottom: 30,
    },
    circle: {
      padding: 10,
      backgroundColor: '#ad55ed',
      borderRadius: 50,
    },
    circle2: {
      padding: 10,
    },
    right: {
      flexDirection: 'row',
    },
    body: {
      width: '100%',
      marginTop: 20,
      paddingHorizontal: appMargin
    },
    h1: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingVertical: 10,
    },
    h2: {
      fontWeight: '500',
    },
    row: {
      width: '100%',
      flexDirection: 'row',
      overflow: 'scroll',
    }
});

export default styles;