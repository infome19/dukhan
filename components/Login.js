import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';


export default class Login extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
        <Image
        style={styles.banner}
        source={require('./images/login-banner.png')}
         />
        </View>
        <View style={styles.myForm}>
            {/* <Myform /> */}
            <View style={styles.viewForm}>
        <Text style={styles.textField}>Please Enter Your Mobile Number</Text>
        <TextInput
        placeholder='Mobile Number'
        style={styles.input} />
        <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Home') }
            style={styles.button}>
            <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
        </View>
      </KeyboardAvoidingView>
      
    );
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    banner: {
        width: 400,
        height: 290,
    },
    myForm: {
        flex: 1,
    },
    viewForm: {
      flex: 1,
      alignItems: 'center',
    },

    textField: {
      marginTop: 80,
  },
  input: {
      marginTop: 30,
      borderBottomColor: '#DAE0E2',
      borderBottomWidth: 1,
      paddingLeft: 50,
      paddingRight: 50,
  },
  button: {
      backgroundColor: '#FF1844',
      marginTop: 30,
      paddingVertical: 15,
      paddingHorizontal: 90,
  },
  buttonText: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
  },
})



