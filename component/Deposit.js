import React from 'react';
import { StyleSheet, Image , Text, View , ScrollView , Alert ,TouchableHighlight, TouchableOpacity } from 'react-native';

//Styles

import { StyleData , ScreenDisp } from '../Ui/StyleData'

const Deposit = () => {
    return(
        <View style={ style.midCont }>
            <View style={ style.head }>
                <View style={ style.avail }>
                    <Text style={ style.col }>Available Limit</Text>
                    <Text style={ style.col }>Rs 25,000</Text>
                </View>
            </View>
            <View style={ style.avail }>
                <Text style={ style.col1 }>Cash in hand</Text>
                <Text style={ style.col1 }>Rs 0</Text>
            </View>
            <View style={ style.avail }>
                <Text style={ style.col1 }>Advance hand</Text>
                <Text style={ style.col1 }>Rs 0</Text>
            </View>
            <TouchableOpacity >
                <Text style={ style.btn }>
                    Pay By UPI
                </Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={ style.btn }>
                    Pay By Net Banking
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    midCont : {
        width : '92%',
        marginVertical : 10,
        backgroundColor : StyleData.White,
        marginHorizontal : '4%',
        minHeight : 700,
        padding : 10,
    },
    head : {
        borderBottomWidth : 1,
        borderBottomColor : StyleData.TextHeading,
    },
    avail : {
        flexDirection : 'row',
    },
    col : {
        width : '50%',
        padding : 10,
        paddingVertical : 15,
        fontSize : 18,
    },
    col1 :{
        width : '50%',
        padding : 10,
        paddingVertical : 15,
        fontSize : 16,
    },
    paycont : {
        margin : 10,
    },
    btn : {
        width : ScreenDisp.WidthFull,
        paddingVertical : 12,
        color : StyleData.White,
        backgroundColor : 'green',
        textAlign : 'center',
        letterSpacing : 1,
        marginVertical : 5,
        borderRadius : 5,
    }
})

export default Deposit