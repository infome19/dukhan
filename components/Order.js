import React, {Component} from 'react';
import { StyleSheet, Text, View, Platform, AppRegistry, TouchableOpacity, Button} from 'react-native';

    // import TabViewExample from '../components/TabViewExample'



export default class Order extends Component {

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
      
    //   async componentDidMount() {
    //     await Font.loadAsync({
    //       'Roboto': require('native-base/Fonts/Roboto.ttf'),
    //       'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    //       ...Ionicons.font,
    //     });
    //   }
    render() {
        return (
         <View style={styles.container}>
          {/* <TabViewExample /> */}
          
          {/* <FooterBadge/> */}
        {/* <TabNavigator>
        <TabNavigator.Item
          title="Home"
          icons="home">
        </TabNavigator.Item>
        <TabNavigator.Item
          title="Chart"
          >
        </TabNavigator.Item>
        <TabNavigator.Item
          title="Chat"
          >
        </TabNavigator.Item>
        <TabNavigator.Item
          title="Profile"
          >
        </TabNavigator.Item>
      </TabNavigator> */}
      </View>
        )
      }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    // TouchableOpacity: {
    //   marginRight: 20
    // }
  });