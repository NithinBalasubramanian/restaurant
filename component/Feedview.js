import React , { useState } from 'react';
import { StyleSheet, Text, View ,SafeAreaView ,ScrollView , Image , TouchableOpacity, DrawerLayoutAndroid } from 'react-native';

//map

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";

import { GOOGLE_API_KEY } from '../constants/maps'

//Styles

import { StyleData , ScreenDisp } from '../Ui/StyleData'


const Notification = ({navigation,route}) => {

    const data = route.params;
    
    return(
        <SafeAreaView style = { style.midView }>
            <ScrollView style = { style.scrollPart} >
                <View style = { style.midView }>
                    <View style={style.back} >
                        <TouchableOpacity  onPress={() => navigation.goBack()} style={{height:'100%'}}>
                            <Image 
                                source ={require('../assets/back.png')}
                                resizeMode ='contain'
                                style = {{
                                    width:25,
                                    height : 25,
                                    top : 40,
                                    left : 20,
                                    tintColor : '#000000',
                                }}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={style.FeedView}>
                      <View style={ style.feedTop }>
                        <Text style={style.listPart}>Restaurant : { data.restaurant }</Text>
                        <Text style={style.listPart}>User : { data.user }</Text>
                      </View>
                      <View style={style.feedmid}>
                      <MapView
                                provider={PROVIDER_GOOGLE}
                               // initialRegion={region}
                                style={style.map}
                            >
                        <MapViewDirections
                            // origin={fromLocation}
                            // destination={toLocation}
                             apikey={GOOGLE_API_KEY}
                            // strokeWidth={5}
                            // strokeColor={StyleData.PriColor}
                            // optimizeWaypoints={true}
                         >

                          </MapViewDirections>
                        </MapView>
                      </View>
                      <View style={style.feedpayment} >
                        <Text>Payment Type : { data.payment_method } </Text>
                        <Text style={{ fontSize:20,paddingVertical : 5 }}>Amount : Rs { data.Amount } </Text>
                        <TouchableOpacity >
                            <Text style={ style.btnAcc }>
                                Accept
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={ style.btnDeny }>
                                Deny
                            </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    midView : {
        width : ScreenDisp.WidthFull,
    },
    back : {
        width : '100%',
        height:80,
        backgroundColor : StyleData.PriColor
    },
    FeedView : {
        width : '92%',
        marginHorizontal : '4%',
        marginVertical : 15,
        borderRadius : 10,
        backgroundColor : '#faf7f0',
        minHeight : 620,
        padding : 10,
    },
    feedTop : {
        width : ScreenDisp.WidthFull,
        padding : 10,
        letterSpacing : 1,
    },
    feedmid : {
        width : ScreenDisp.WidthFull,
        minHeight : 250,
        borderBottomWidth : 1,
        borderBottomColor : StyleData.TextHeading,
        backgroundColor : StyleData.SubText,
    },
    feedpayment : {
        width : ScreenDisp.WidthFull,
        padding : 10,
        paddingVertical : 15,
        marginVertical : 4,
    },
    btnAcc : {
        width : ScreenDisp.WidthFull,
        paddingVertical : 12,
        color : StyleData.White,
        backgroundColor : 'green',
        textAlign : 'center',
        letterSpacing : 1,
        marginVertical : 5,
        borderRadius : 5,
    },
    btnDeny : {
        width : ScreenDisp.WidthFull,
        paddingVertical : 12,
        color : StyleData.White,
        backgroundColor : 'red',
        textAlign : 'center',
        letterSpacing : 1,
        marginVertical : 5,
        borderRadius : 5,
    },
    map : {
        width : ScreenDisp.WidthFull,
        height : 300,
    },
})

export default Notification