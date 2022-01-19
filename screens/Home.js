import React, { useState, useEffect, isValidElement } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { isURLSearchParams } from 'react-native-axios/lib/utils';
import { connect } from 'react-redux';
import { fetchCategories, fetchRestaurants,fetchSpecificRestaurants,addFavourites } from '../actions/mainAction';

import { icons, images, SIZES, COLORS } from '../constants'
import { PhoneHeight } from '../constants/config';

const Home = ({ navigation, categoriesValue, fetchCategories, fetchRestaurants, restaurantsValue, selectedRestaurantsValue, fetchSpecificRestaurants, route, addFavourites }) => {
    // console.log("proppsssss", route.params.userInfos.fullName);
    // Dummy Datas
    const initialCurrentLocation = {
        streetName: "Sarıçam",
        gps: {
            latitude: 37.038707,
            longitude: 35.385759
        }
    }
    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    // const restaurantData = [
    //     {
    //         id: 1,
    //         name: "ByProgrammers Burger",
    //         rating: 4.8,
    //         categories: [5, 7],
    //         priceRating: affordable,
    //         photo: images.burger_restaurant_1,
    //         duration: "30 - 45 min",
    //         location: {
    //             latitude: 1.5347282806345879,
    //             longitude: 110.35632207358996,
    //         },
    //         courier: {
    //             avatar: images.avatar_1,
    //             name: "Amy"
    //         },
    //         menu: [
    //             {
    //                 menuId: 1,
    //                 name: "Crispy Chicken Burger",
    //                 photo: images.crispy_chicken_burger,
    //                 description: "Burger with crispy chicken, cheese and lettuce",
    //                 calories: 200,
    //                 price: 10
    //             },
    //             {
    //                 menuId: 2,
    //                 name: "Crispy Chicken Burger with Honey Mustard",
    //                 photo: images.honey_mustard_chicken_burger,
    //                 description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
    //                 calories: 250,
    //                 price: 15
    //             },
    //             {
    //                 menuId: 3,
    //                 name: "Crispy Baked French Fries",
    //                 photo: images.baked_fries,
    //                 description: "Crispy Baked French Fries",
    //                 calories: 194,
    //                 price: 8
    //             }
    //         ]
    //     },
    //     {
    //         id: 2,
    //         name: "ByProgrammers Pizza",
    //         rating: 4.8,
    //         categories: [2, 4, 6],
    //         priceRating: expensive,
    //         photo: images.pizza_restaurant,
    //         duration: "15 - 20 min",
    //         location: {
    //             latitude: 1.556306570595712,
    //             longitude: 110.35504616746915,
    //         },
    //         courier: {
    //             avatar: images.avatar_2,
    //             name: "Jackson"
    //         },
    //         menu: [
    //             {
    //                 menuId: 4,
    //                 name: "Hawaiian Pizza",
    //                 photo: images.hawaiian_pizza,
    //                 description: "Canadian bacon, homemade pizza crust, pizza sauce",
    //                 calories: 250,
    //                 price: 15
    //             },
    //             {
    //                 menuId: 5,
    //                 name: "Tomato & Basil Pizza",
    //                 photo: images.pizza,
    //                 description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
    //                 calories: 250,
    //                 price: 20
    //             },
    //             {
    //                 menuId: 6,
    //                 name: "Tomato Pasta",
    //                 photo: images.tomato_pasta,
    //                 description: "Pasta with fresh tomatoes",
    //                 calories: 100,
    //                 price: 10
    //             },
    //             {
    //                 menuId: 7,
    //                 name: "Mediterranean Chopped Salad ",
    //                 photo: images.salad,
    //                 description: "Finely chopped lettuce, tomatoes, cucumbers",
    //                 calories: 100,
    //                 price: 10
    //             }
    //         ]
    //     },
    //     {
    //         id: 3,
    //         name: "ByProgrammers Hotdogs",
    //         rating: 4.8,
    //         categories: [3],
    //         priceRating: expensive,
    //         photo: images.hot_dog_restaurant,
    //         duration: "20 - 25 min",
    //         location: {
    //             latitude: 1.5238753474714375,
    //             longitude: 110.34261833833622,
    //         },
    //         courier: {
    //             avatar: images.avatar_3,
    //             name: "James"
    //         },
    //         menu: [
    //             {
    //                 menuId: 8,
    //                 name: "Chicago Style Hot Dog",
    //                 photo: images.chicago_hot_dog,
    //                 description: "Fresh tomatoes, all beef hot dogs",
    //                 calories: 100,
    //                 price: 20
    //             }
    //         ]
    //     },
    //     {
    //         id: 4,
    //         name: "ByProgrammers Sushi",
    //         rating: 4.8,
    //         categories: [8],
    //         priceRating: expensive,
    //         photo: images.japanese_restaurant,
    //         duration: "10 - 15 min",
    //         location: {
    //             latitude: 1.5578068150528928,
    //             longitude: 110.35482523764315,
    //         },
    //         courier: {
    //             avatar: images.avatar_4,
    //             name: "Ahmad"
    //         },
    //         menu: [
    //             {
    //                 menuId: 9,
    //                 name: "Sushi sets",
    //                 photo: images.sushi,
    //                 description: "Fresh salmon, sushi rice, fresh juicy avocado",
    //                 calories: 100,
    //                 price: 50
    //             }
    //         ]
    //     },
    //     {
    //         id: 5,
    //         name: "ByProgrammers Cuisine",
    //         rating: 4.8,
    //         categories: [1, 2],
    //         priceRating: affordable,
    //         photo: images.noodle_shop,
    //         duration: "15 - 20 min",
    //         location: {
    //             latitude: 1.558050496260768,
    //             longitude: 110.34743759630511,
    //         },
    //         courier: {
    //             avatar: images.avatar_4,
    //             name: "Muthu"
    //         },
    //         menu: [
    //             {
    //                 menuId: 10,
    //                 name: "Kolo Mee",
    //                 photo: images.kolo_mee,
    //                 description: "Noodles with char siu",
    //                 calories: 200,
    //                 price: 5
    //             },
    //             {
    //                 menuId: 11,
    //                 name: "Sarawak Laksa",
    //                 photo: images.sarawak_laksa,
    //                 description: "Vermicelli noodles, cooked prawns",
    //                 calories: 300,
    //                 price: 8
    //             },
    //             {
    //                 menuId: 12,
    //                 name: "Nasi Lemak",
    //                 photo: images.nasi_lemak,
    //                 description: "A traditional Malay rice dish",
    //                 calories: 300,
    //                 price: 8
    //             },
    //             {
    //                 menuId: 13,
    //                 name: "Nasi Briyani with Mutton",
    //                 photo: images.nasi_briyani_mutton,
    //                 description: "A traditional Indian rice dish with mutton",
    //                 calories: 300,
    //                 price: 8
    //             },

    //         ]
    //     },
    //     {

    //         id: 6,
    //         name: "ByProgrammers Dessets",
    //         rating: 4.9,
    //         categories: [9, 10],
    //         priceRating: affordable,
    //         photo: images.kek_lapis_shop,
    //         duration: "35 - 40 min",
    //         location: {
    //             latitude: 1.5573478487252896,
    //             longitude: 110.35568783282145,
    //         },
    //         courier: {
    //             avatar: images.avatar_1,
    //             name: "Jessie"
    //         },
    //         menu: [
    //             {
    //                 menuId: 12,
    //                 name: "Teh C Peng",
    //                 photo: images.teh_c_peng,
    //                 description: "Three Layer Teh C Peng",
    //                 calories: 100,
    //                 price: 2
    //             },
    //             {
    //                 menuId: 13,
    //                 name: "ABC Ice Kacang",
    //                 photo: images.ice_kacang,
    //                 description: "Shaved Ice with red beans",
    //                 calories: 100,
    //                 price: 3
    //             },
    //             {
    //                 menuId: 14,
    //                 name: "Kek Lapis",
    //                 photo: images.kek_lapis,
    //                 description: "Layer cakes",
    //                 calories: 300,
    //                 price: 20
    //             }
    //         ]

    //     }


    // ]

    const [selectedCategory, setSelectedCategory] = React.useState(null)
    // const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [selectedFavourite, setSelectedFavourite] = React.useState(null)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)
    useEffect(() => {
        fetchCategories()
        fetchRestaurants()
      }, []);
      
    function onSelectedFavourite(isFavourite){
        console.log("is favorsdklşgsdlşfkdsflşksdlşgfsd",isFavourite);
        setSelectedFavourite(isFavourite)
        addFavourites(route.params.userInfos.id, isFavourite)
    }
    function onSelectCategory(catId){
        fetchSpecificRestaurants(catId)
        setSelectedCategory(catId)
    }

    function renderHeader() {
        console.log("route main");
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{  }}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Restaurant",{
                        item,
                        currentLocation
                    })}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            console.log("yeni item",item.id);
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item.id)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 55,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}>
                        <Image
                            source={{uri:item.photoLink}}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                        }}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ fontWeight:'bold', fontSize:20 }}>Main</Text>
                <Text style={{ fontSize:20 }}>Categories</Text>

                <FlatList
                    data={categoriesValue}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }
    function renderRestaurantList() {
       
        const renderItem = ({ item }) => {
            console.log("iteemmmmmmmmmm for favorıııı",item);
            return(
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding,
                        // alignItems:'flex-end'
                    }}
                >
                   <TouchableOpacity
            onPress = {() => onSelectedFavourite(item.id)}
            style={{
                height: 35,
                position:'absolute',
                right:0,
                marginRight:20,
                marginTop:20,
                zIndex:2,
                width: 35,
                tintColor: COLORS.primary,
    
            }}
            >
            <Image
                source={icons.like}
                style={{
                    height: 35,
                    // position:'absolute',
                    right:0,
                    zIndex:2,
                    width: 35,
                    tintColor: (selectedFavourite == item.id) ? COLORS.primary : COLORS.white
                }}
            />
            </TouchableOpacity>
                    <Image
                        source={{uri:item.photoLink}}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                      <Text style={{  }}>{item.deliveryTime} min</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{  }}>{item.title}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{  }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={item.id}
                                    >
                                        <Text style={{  }}>{categoriesValue.title}</Text>
                                        <Text style={{ color: COLORS.darkgray }}> . </Text>
                                    </View>

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={item.id}
                                    style={{
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
            )
        }

        return (
            <FlatList
                data={selectedCategory == null? restaurantsValue : selectedRestaurantsValue}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

const mapStateToProps = state => {
    const { categoriesValue, restaurantsValue, selectedRestaurantsValue, favouriteRestaurants} = state.mainReducer;
    return {
        categoriesValue,
        restaurantsValue,
        selectedRestaurantsValue,
        favouriteRestaurants

    }
  }
  export default connect(
    mapStateToProps,
    {
     fetchCategories,
     fetchRestaurants,
     fetchSpecificRestaurants,
     addFavourites
    }
  )(Home)