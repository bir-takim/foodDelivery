import * as React from 'react';
import { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Cart from './screens/Cart';
import OrderDelivery from './screens/OrderDelivery';
import Restaurant from './screens/Restaurant';
import Tabs from './navigation/tabs';
import SearchPage from './screens/SearchPage';

class RouterComp extends Component {
    render() {
        const Stack  = createStackNavigator();
        return(
            <NavigationContainer>
                <Stack.Navigator name = 'authStack' initialRouteName = 'Tabs' screenOptions={{headerShown: false}}>
                    <Stack.Screen  name="Tabs" component={Tabs} />
                    <Stack.Screen name="Cart" component={Cart} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Restaurant" component={Restaurant}/>
                    <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>
                </Stack.Navigator>
            </NavigationContainer>  
        )
    }
}

export default RouterComp;