import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Button, Icon, Footer, FooterTab  } from 'native-base';

export default class Home extends Component {

  constructor(props) {
    super(props)
  }
        
static navigationOptions = ({navigation}) => ({
  headerTitle: '',
  headerStyle: {
    backgroundColor: '#FF1844',
  },
  headerLeft: (
    <TouchableOpacity style={styles.TouchableOpacity}>
    <Image style={styles.menu}
    source={require('./images/dr.png')} />
  </TouchableOpacity>
  ),
  headerRight: (
    <TouchableOpacity style={styles.TouchableOpacity}>
    <View style={styles.viwerRight}>
    <Image style={styles.search}
    source={require('./images/search.png')} />
    <Image style={styles.cart} 
    source={require('./images/cart.png')} />
    </View>
  </TouchableOpacity>
  ),
  headerTitleStyle: {
    color: '#fff',
  }
});

  render() {
    return (
     
      <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={{flex: 1}}>
        <Image style={styles.banner}
        source={require('./images/banner.png')} />
        </View>
     
     <View style={{flex:2, padding: 10, borderRadius: 5}}>
     
        <Card>
          <CardItem>
            <Left>
            <Thumbnail style={styles.thumbnail}
            source={require('./images/kids.png')} />
            <Thumbnail style={styles.thumbnail}
            source={require('./images/men.png')} />
            <Thumbnail style={styles.thumbnail}
            source={require('./images/women.png')} />
            <Thumbnail style={styles.thumbnail}
            source={require('./images/shoes.png')} />
            <Thumbnail style={styles.thumbnail}
            source={require('./images/others.png')} />
            </Left>
          </CardItem>
          </Card>
         
          </View>

          <View style={{flex: 3, marginLeft: 8, marginTop: 5}}>
            <Text style={{fontSize: 18}}>Brand Stores</Text>
            <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card style={{width:65, height: 70, justifyContent: 'center', alignItems: 'center'}}>
            <CardItem>
            <Left>
              <Image style={styles.image} source={require('./images/adidas.png')} />
              </Left>
              </CardItem>
            </Card>
            <Card style={{width:65, height: 70, justifyContent: 'center', alignItems: 'center'}}>
            <CardItem>
            <Left>
              <Image style={styles.image} source={require('./images/puma.png')} />
              </Left>
              </CardItem>
            </Card>
            <Card style={{width:65, height: 70, justifyContent: 'center', alignItems: 'center'}}>
            <CardItem>
            <Left>
              <Image style={styles.image3} source={require('./images/fastrack.png')} />
              </Left>
              </CardItem>
            </Card>
            <Card style={{width:65, height: 70, justifyContent: 'center', alignItems: 'center'}}>
            <CardItem>
            <Left>
              <Image style={styles.image4} source={require('./images/park.png')} />
              </Left>
              </CardItem>
            </Card>
            <Card style={{width:65, height: 70, justifyContent: 'center', alignItems: 'center'}}>
            <CardItem>
            <Left>
              <Image style={styles.image5} source={require('./images/lux.png')} />
              </Left>
              </CardItem>
            </Card>
            <Card style={{width:65, height: 70, justifyContent: 'center', alignItems: 'center'}}>
            <CardItem>
            <Left>
              <Image style={styles.image5} source={require('./images/lux.png')} />
              </Left>
              </CardItem>
            </Card>
            <Card style={{width:65, height: 70, justifyContent: 'center', alignItems: 'center'}}>
            <CardItem>
            <Left>
              <Image style={styles.image5} source={require('./images/lux.png')} />
              </Left>
              </CardItem>
            </Card>
            </ScrollView>
            </View>
          </View>

          <View style={{flex: 3, marginTop: 12, marginLeft: 13}}>
            <Text style={{fontSize: 18}}>Fast Moving - power bank</Text>
          </View>
        <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Details') }  activeOpacity={0.7}>
              <Card style={{marginLeft: 8}} onPress={() =>  this.props.navigation.navigate('Details') }>
                <CardItem style={{backgroundColor: '#EAF0F1' }}>
                <Image source={require('./images/sandisk.png')} style={{height: 78, width: 78}}/>
                </CardItem>
                <CardItem>
              <Body style={{height: 70, width: 75}}>
                <Text>
                  Sandisk Memory Card 32GB
                  ₹ 200 per
                </Text>
              </Body>
            </CardItem>
              </Card>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Details') }  activeOpacity={0.7}>
              <Card>
              <CardItem style={{backgroundColor: '#EAF0F1' }}>
                <Image source={require('./images/memmory-card.png')} style={{height: 78, width: 78}}/>
                </CardItem>
                <CardItem>
              <Body style={{height: 70, width: 75}}>
                <Text>
                  Memory Card Ultra 32GB
                  ₹ 99 per
                </Text>
              </Body>
            </CardItem>
              </Card>
          </TouchableOpacity> 

          <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Details') }  activeOpacity={0.7}>
              <Card style={{marginRight: 8}}>
              <CardItem style={{backgroundColor: '#EAF0F1' }}>
                <Image source={require('./images/powerbank.png')} style={{height: 78, width: 78}}/>
                </CardItem>
                <CardItem>
              <Body style={{height: 70, width: 75}}>
                <Text>
                  Mi 1000mAH LiPolymer
                  ₹ 150 per
                </Text>
              </Body>
            </CardItem>
              </Card>
           </TouchableOpacity>

          <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Details') }  activeOpacity={0.7}>
              <Card>
              <CardItem style={{backgroundColor: '#EAF0F1' }}>
                <Image source={require('./images/memmory-card.png')} style={{height: 78, width: 78}}/>
                </CardItem>
                <CardItem>
              <Body style={{height: 70, width: 75}}>
                <Text>
                  Memory Card Ultra 32GB
                  ₹ 99 per
                </Text>
              </Body>
            </CardItem>
              </Card>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Details') }  activeOpacity={0.7}>
              <Card style={{marginRight: 8}}>
              <CardItem style={{backgroundColor: '#EAF0F1' }}>
                <Image source={require('./images/powerbank.png')} style={{height: 78, width: 78}}/>
                </CardItem>
                <CardItem>
              <Body style={{height: 70, width: 75}}>
                <Text>
                  Mi 1000mAH LiPolymer
                  ₹ 150 per
                </Text>
              </Body>
            </CardItem>
              </Card>
          </TouchableOpacity>
              
              </ScrollView>
              </View>


          <View style={{flex: 3, marginTop: 12, marginLeft: 13}}>
            <Text style={{fontSize: 18}}>Best Seller Smart Phones</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Details') }  activeOpacity={0.7}>
              <Card style={{marginLeft: 8}}>
                <CardItem style={{backgroundColor: '#EAF0F1' }}>
                <Image source={require('./images/mobile.png')} style={{height: 78, width: 78}}/>
                </CardItem>
                <CardItem>
              <Body style={{height: 70, width: 75}}>
                <Text>
                  Redmi 6a 2GB 16GB
                  ₹ 4999 per
                </Text>
              </Body>
            </CardItem>
              </Card>
          </TouchableOpacity>  

          <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Details') }  activeOpacity={0.7}>  
              <Card>
              <CardItem style={{backgroundColor: '#EAF0F1' }}>
                <Image source={require('./images/mobile2.png')} style={{height: 78, width: 78}}/>
                </CardItem>
                <CardItem>
              <Body style={{height: 70, width: 75}}>
                <Text>
                  Redmi 6a 2GB 16GB
                  ₹ 4999 per
                </Text>
              </Body>
            </CardItem>
              </Card>
          </TouchableOpacity>  

          <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Details') }  activeOpacity={0.7}> 
              <Card style={{marginRight: 8}}>
              <CardItem style={{backgroundColor: '#EAF0F1' }}>
                <Image source={require('./images/mobile.png')} style={{height: 78, width: 78}}/>
                </CardItem>
                <CardItem>
              <Body style={{height: 70, width: 75}}>
                <Text>
                  Redmi 6a 2GB 16GB
                  ₹ 4999 per
                </Text>
              </Body>
            </CardItem>
              </Card>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Details') }  activeOpacity={0.7}>
              <Card>
              <CardItem style={{backgroundColor: '#EAF0F1' }}>
                <Image source={require('./images/mobile2.png')} style={{height: 78, width: 78}}/>
                </CardItem>
                <CardItem>
              <Body style={{height: 70, width: 75}}>
                <Text>
                  Redmi 6a 2GB 16GB
                  ₹ 4999 per
                </Text>
              </Body>
            </CardItem>
              </Card>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Details') }  activeOpacity={0.7}>
              <Card style={{marginRight: 8}}>
              <CardItem style={{backgroundColor: '#EAF0F1' }}>
                <Image source={require('./images/mobile.png')} style={{height: 78, width: 78}}/>
                </CardItem>
                <CardItem>
              <Body style={{height: 70, width: 75}}>
                <Text>
                  Redmi 6a 2GB 16GB
                  ₹ 4999 per
                </Text>
              </Body>
            </CardItem>
              </Card>
          </TouchableOpacity>
          
              </ScrollView>
              </View>
              </ScrollView>
           

          <View>
        <Footer>
          <FooterTab style={{backgroundColor: '#fff'}}>
            <Button vertical>
              <Icon name="home" style={{color: '#000'}} />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={() =>  this.props.navigation.navigate('Order')}>
              <Icon name="cart" style={{color: '#000'}} />
              <Text>Cart</Text>
            </Button>
            <Button vertical>
              <Icon name="chatboxes" style={{color: '#000'}} />
              <Text>Chat</Text>
            </Button>
            <Button vertical>
              <Icon name="person" style={{color: '#000'}} />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
        </View>
       
          </View> 
         
    );
  }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
    },
    menu: {
      width: 20,
      height: 30,
      marginLeft: 10,
    },
   viwerRight: {
     flexDirection: 'row',
   },
   search: {
     width: 22,
     height: 22,
     marginRight: 25,
     padding: 5,
   },
   cart: {
    width: 22,
    height: 22,
    marginRight: 10,
    padding: 5,
   },
   banner: {
     width: 338,
     height: 180,
     borderRadius: 5,
     padding: 10,
     marginLeft: 10,
   },
   thumbnail: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
   },
   brand: {
    flexDirection: 'row',
   },
   image: {
     
     width: 35,
     height: 30,
   },
   image3: {
     width: 30,
     height: 20,
   },
   image4: {
    width: 30,
    height: 20,
   },
   image5: {
    width: 30,
    height: 20,
   },
   contentContainer: {
   
  },
   
})