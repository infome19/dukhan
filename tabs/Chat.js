

import React, { Component } from 'react';
//import react in our code.
import { Text, View ,Button} from 'react-native';

//import all the components we are going to use.
 
export default class Chat extends React.Component {
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
             {/* <Button
            onPress={() =>
              this.props.navigation.navigate('Details')
            }
            title="Go to Settings"
          /> */}
          
      </View>
    );
  }
}