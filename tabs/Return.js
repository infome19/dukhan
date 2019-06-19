

// Setting screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View , Button} from 'react-native';
//import all the components we are going to use.
 
export default class Return extends React.Component {
    constructor(props) {
        super(props)
      }
      
    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Infofixing Mobile',
        headerStyle: {
          backgroundColor: '#FF1844',
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: '400',
        }
      });
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No Data</Text>
      </View>
    );
  }
}
