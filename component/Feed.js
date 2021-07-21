import React from 'react';
import { StyleSheet, Image , Text, View , ScrollView , Alert ,TouchableOpacity } from 'react-native';

//Styles

import { StyleData , ScreenDisp } from '../Ui/StyleData'

const Feed = ( { navigation }) => {


    const orders = [
        {
            'restaurant' : 'Green Hotel',
            'Ordered_from' : 'location 1',
            'order_to' : 'location 2',
            'user' : 'Kiran',
            'payment_method' : 'COD',
            'Amount' : '300'
        },
        {
            'restaurant' : 'Paradise Hotel',
            'Ordered_from' : 'location 1',
            'order_to' : 'location 2',
            'user' : 'Sharma Sai',
            'payment_method' : 'COD',
            'Amount' : '500' 
        },
        {
            'restaurant' : 'Green Hotel',
            'Ordered_from' : 'location 1',
            'order_to' : 'location 2',
            'user' : 'Krishna kumar',
            'payment_method' : 'Online',
            'Amount' : '800' 
        }
    ]

    return(
        <ScrollView>
            <View style={ Style.midView }>
                { orders.map((itm,k) => {
                    return(
                        <TouchableOpacity style={ Style.feedCart } key={ k } onPress={ () => { navigation.push("Feedview", itm )} }>
                            <View style={ Style.orderHead }>
                                 <Text style={ Style.restaurant }>
                                  { itm.restaurant }
                                </Text> 
                                <Text>
                                  { itm.user }
                                </Text> 
                            </View>
                            <Text style={ Style.path }>{ itm.Ordered_from } --> { itm.order_to } </Text>
                            <Text style={ Style.amount }>Rs  { itm.Amount } - { itm.payment_method }</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ScrollView>
    )
}


const Style = StyleSheet.create({
    midView : {
        width : '92%',
        marginHorizontal : '4%',
        marginVertical : 15,
        minHeight : 700,
    },
    feedCart : {
        width : ScreenDisp.WidthFull,
        minHeight : 80,
        backgroundColor : StyleData.SubText,
        marginVertical : 3,
        padding : 8,
        borderRadius : 10,
    },
    orderHead : {
        padding : 4,
        flexDirection : 'row',
        marginBottom : 6,
        borderBottomWidth : 1,
        borderBottomColor : StyleData.TextHeading,
    },
    path : {
        padding : 4,
    },
    amount : {
        padding : 4,
    },
    restaurant : {
        width : '60%',
        fontSize : 18,
        color : StyleData.TextHeading,
    }
})


export default Feed