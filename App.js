import React from 'react';

import { createStackNavigator  } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs'

import { Home, Restaurant, OrderDelivery, Cart} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Cart'}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Restaurant" component={Restaurant}/>
        <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;