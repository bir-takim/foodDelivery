import * as React from 'react';
import { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Cart from './screens/Cart';
import OrderDelivery from './screens/OrderDelivery';
import Tabs from './navigation/tabs';
import SearchPage from './screens/SearchPage';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import MyProfile from './screens/MyProfile';
import Restaurant from './screens/Restaurant';
import Payment from './screens/Payment';

class RouterComp extends Component {
    render() {
        const Stack  = createStackNavigator();
        return(
            <NavigationContainer>
                <Stack.Navigator name = 'authStack' initialRouteName = 'Tabs' screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Tabs" component={Tabs} />
                    <Stack.Screen name="SearchPage" component={SearchPage} />
                    <Stack.Screen name="Cart" component={Cart} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="MyProfile" component={MyProfile}/>
                    <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>
                    <Stack.Screen name="Restaurant" component={Restaurant}/>
                    <Stack.Screen name="Payment" component={Payment}/>

                </Stack.Navigator>
            </NavigationContainer>  
        )
    }
}
export default RouterComp;