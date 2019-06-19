import React, {Component} from 'react';
import { StyleSheet, View, Platform, AppRegistry, TouchableOpacity, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right } from 'native-base';


export default class Details extends Component {

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

         <View style={{flex : 1}}>
          <Container  style={{ padding: 10 }}>
            <Content>
                <Card >
                <CardItem>
                    <View >
                        <View style={{paddingLeft:80}}>
                         <Image  source = {require('./images/mobile.png')} />
                        </View>
                        <View>
                            <Text>
                                REDMI 6 (3GB,32GB) Fresh Saled pack
                            </Text>
                        </View>
                        <View style = {{flexDirection: 'row'}}>
                            <View>
                            <Text style= {{ color:'#FF1844' }}>₹ 6999 per pc</Text>
                            </View>
                            <View style={{paddingLeft:70}}>
                            <Text note>Min.QTY 1 pcs </Text>
                            </View>
                        
                        </View>
                    </View>
                </CardItem>
                </Card>

                <Card >
                 <CardItem>
                     <View>
                      <View style = {{flexDirection: 'row'}}>
                      <Text>
                        Specification
                     </Text>
                      </View>

                      <View style = {{flexDirection: 'row', padding: 5}}>
                        <View style = {{flexDirection: 'column'}}>
                        <Text>Smart Phone Model NO</Text>
                        <Text>Waranty Period</Text>
                        <Text>RAM</Text>
                        <Text>SIM Type</Text>
                        <Text>Internal Memory</Text>
                        <Text>Activation Status</Text>
                        <Text>Network Support</Text>
                        <Text>OS</Text>
                        </View>

                        <View style = {{flexDirection: 'column',paddingLeft:75}}>
                            <Text note>Redmi 6</Text>
                            <Text note>1 Year</Text>
                            <Text note>3 GB</Text>
                            <Text note>Dual SIM</Text>
                            <Text note>32GB</Text>
                            <Text note>Fresh</Text>
                            <Text note>4G Volte</Text>
                            <Text note>Android</Text>
                        </View>

                     </View>
                     </View>
                 </CardItem>
                </Card>

                <Card >
                 <CardItem>
                     <View>
                      <View style = {{flexDirection: 'row'}}>
                      <Text>
                        Product Details
                     </Text>
                      </View>
                      <View style = {{flexDirection: 'row'}}>
                      <Text note>
                       REDMI 6-5.45 INCH DISPLAY, 12MP+5MP DUAL REAR CAMERA, 5MP FONT CAMERA, 300 MAH BATTERY
                     </Text>
                      </View>
                    </View>
                 </CardItem>
                </Card>

                {/* <Card >
                 <CardItem> */}
                  <View>
                    <View style = {{flexDirection: 'row', justifyContent:'center'}}>
                    <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('') }
                        style={styles.button}>
                        <Text style={styles.buttonText}>BUY NOW</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                 {/* </CardItem>
                </Card>  */}

            </Content>
           </Container> 
        </View>
        )
      }
}
const styles = StyleSheet.create({
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
});