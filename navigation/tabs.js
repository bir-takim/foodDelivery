import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import  { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';
import {SearchPage} from '../screens';
import {OrderDelivery} from '../screens';
import {MyProfile} from '../screens'; 
// import {MyFavourite} from '../screens';
// import {SearchPage} from '../screens';
import icons from '../constants/icons';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, {Path} from 'react-native-svg';
import MyFavourite from '../screens/MyFavourite';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
    var isSelected = accessibilityState.selected
    if(isSelected) {
        return(
            <View style={{flex:1, alignItems:'center'}}>
                <View style={{flexDirection:'row', position:'absolute', top:0}}>
                    <View style={{flex:1, backgroundColor:'white'}}></View>
                    <Svg
                        width={75}
                        height={111}
                        viewBox="20 20 60 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={'white'}
                        />
                    </Svg>
                    <View style={{flex:1, backgroundColor:'white'}}></View>
                </View>
                <TouchableOpacity
                    style={{
                        borderWidth:1,
                        top:-17.5,
                        justifyContent:'center',
                        alignItems:'center',
                        height:50,
                        width:50,
                        borderRadius:25,
                        borderColor:'orange',
                        backgroundColor:'white'
                    }}
                    activeOpacity={1}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
           
        )
    }else{
        return(
            <TouchableOpacity
                    style={{
                        flex:1,
                        height:60,
                        backgroundColor:'white'
                    }}
                    activeOpacity={1}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
        )
    }

}
const CustomTabBar = (props) =>{
    return(
        <View>
            <View
                style ={{
                    position:'absolute',
                    bottom:0,
                    left:0,
                    right:0,
                    height:30,
                    backgroundColor:'white'
                }}
            >

            </View>
            <BottomTabBar {...props.props}/>
        </View>
        
    )
}

const Tabs = ({route}) => {
     console.log("route", route.params.data.fullName);
     const userInfos = route.params.data
    return (
        <Tab.Navigator
            screenOptions={{headerShown: false}}
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation:0
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                initialParams={{userInfos: userInfos}}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="silverware-fork-knife" color={'orange'} size={35} />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                             {...props}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Search"
                component={SearchPage}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="magnify" color={'orange'} size={35} />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                             {...props}
                        />
                    )
                }}
            />
             <Tab.Screen 
                name="Like"
                component={MyFavourite}
                initialParams={{userInfos: userInfos}}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="cards-heart" color={'orange'} size={35} />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                             {...props}
                        />
                    )
                }}
            />
             <Tab.Screen 
                name="User"
                component={MyProfile}
                initialParams={{userInfos: userInfos}}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account" color={'orange'} size={35} />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                             {...props}
                        />
                    )
                }}
            />
            
        </Tab.Navigator>
    )
}


export default Tabs;