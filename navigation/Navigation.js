import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Login from '../components/Login';
import Home from '../components/Home';
import Details from '../components/Details';
import Chat from '../tabs/Chat';
import OrderForm from '../tabs/OrderForm';
import Return from '../tabs/Return';


  const TabScreen = createMaterialTopTabNavigator(
    {
      Chat: { screen: Chat },
      OrderForm: { screen: OrderForm },
      Return: { screen: Return },
    },
    {
      tabBarPosition: 'top',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#FFFFFF',
        style: {
          backgroundColor: '#FF1844',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#FFFFFF',
          borderBottomWidth: 2,
        },
      },
    }
  );

const RootStack =  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    Home: {
        screen: Home,
      },
      Order: {
        // screen: Order,
        screen: TabScreen,
        navigationOptions: {
          // title: 'Order',
        headerTitle: 'Infofixing Mobile',
        headerStyle: {
          backgroundColor: '#FF1844',
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: '400',
        }
        //   header: null,
          // headerLeft: null
        }
        
      },
      Details: {
        screen: Details,
      },

    });

    const AppNavigator = createAppContainer(RootStack);
    // export default createAppContainer(AppTabNavigator);
    export default AppNavigator;