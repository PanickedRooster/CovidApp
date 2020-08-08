import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'Nucleo',
    },
    card: {
        borderRadius: 12, 
        elevation: 2, 
        backgroundColor: '#fcfcfc',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        marginHorizontal: 20, 
        marginVertical: 15,
    },
    buissnessContent: {
        marginHorizontal: 50, 
        marginVertical: 10,
        alignItems: 'center',
        // alignContent: 'center'
    },
    cardContent: {
      marginHorizontal: 18, 
      marginVertical: 10,
  }

})