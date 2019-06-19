
// Setting screen
import React, { Component } from 'react';
//import react in our code.
import { View, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
//import all the components we are going to use.
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right } from 'native-base';
export default class OrderForm extends React.Component {
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
      <View style={{ flex: 1}}>

        <View style={{ padding: 10}}>

        <View style = {{flexDirection: 'row'}}>
        <Text note>Buyer: </Text>
        <Text>Shop ( You ) </Text>
        </View>

        <View style = {{flexDirection: 'row'}}>
        <Text note>Sypplier: </Text>
        <Text>Infofixing Mobile </Text>
        <View style={{paddingLeft:70}}>
        <TouchableOpacity 
           style={styles.button}>
           <Text style={styles.buttonText}>Add More</Text>
        </TouchableOpacity>
        {/* <Button  style= {{textAlign:'right', color:"#FF1844", backgroundColor:'#FF1844'}}  title="Add More" 
                onPress={() =>
                  this.props.navigation.navigate('Otp')
                } /> */}
        </View>
        </View>
        </View>
      <Container  style={{ padding: 10 }}>
      <Content>
        <Card >
          <CardItem>
            <Left>
              <Thumbnail  source = {require('../components/images/mobile.png')} />
              <Body>
                <Text>REDMI Phone</Text>
                <Text note>Fresh Saled pack</Text>
                <View style = {{flexDirection: 'row'}}>
                <Text >QTY : 5 </Text>
                <Text style= {{textAlign:'right', color:'#FF1844' ,marginLeft:50}}>₹ 999</Text>
                </View>
              </Body>
            </Left>
          </CardItem>
        </Card>

        <Card >
          <CardItem>
            <Left>
              <Thumbnail  source = {require('../assets/powerbank.png')} />
              <Body>
                <Text>Mi 10000mAH Li-Polymer</Text>
                <Text note>Fresh Saled pack</Text>
                <View style = {{flexDirection: 'row'}}>
                <View>
                <Text >QTY : 5 </Text>
                </View>
                <View style={{paddingLeft:60}}>
                <Text style= {{textAlign:'right', color:'#FF1844' }}>₹ 225</Text>
                </View>
                
                </View>
              </Body>
            </Left>
          </CardItem>
        </Card>

        <Card >
         <CardItem>
                <View style = {{flexDirection: 'row'}}>
                <View>
                <Text >Total : <Text style= {{ color:'#FF1844' ,marginLeft:50}}>₹ 7,225 </Text><Text note  >10 pices</Text> </Text>
                </View>
               
                <View style={{marginLeft:65}}>
                <TouchableOpacity  onPress={() =>
                  this.props.navigation.navigate('Details')}
                  style={styles.button}>
                  <Text style={styles.buttonText}>CHECKOUT</Text>
                </TouchableOpacity>
                {/* <Button  style= {{textAlign:'right', color:"#ff5c5c"}}  title="CHECKOUT" 
                onPress={() =>
                  this.props.navigation.navigate('Details')
                } /> */}
                </View>
                </View>
         </CardItem>
        </Card>

      </Content>
    </Container>

    </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF1844',
    // marginTop: 30,
    paddingVertical: 9,
    paddingHorizontal: 5,
},
buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
},
});
