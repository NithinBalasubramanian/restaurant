import React from 'react';
import { StyleSheet, Image , Text, View , ScrollView , Alert ,TouchableOpacity } from 'react-native';

//Styles

import { StyleData , ScreenDisp } from '../Ui/StyleData'

const MenuList = ( { navigation }) => {


    const orders = [
        {
            'Product' : 'Chicken Biriyani',
            'Type' : 'Non Vegetarian',
            'Discount' : '20%',
            'Old_Amount' : '340',
            'Amount' : '300'
        },
        {
            'Product' : 'Chicken Fry Rice',
            'Type' : 'Non Vegetarian',
            'Discount' : '10%',
            'Old_Amount' : '120',
            'Amount' : '100'
        },
        {
            'Product' : 'Chicken Chilly',
            'Type' : 'Non Vegetarian',
            'Discount' : '20%',
            'Old_Amount' : '180',
            'Amount' : '160'
        },
        {
            'Product' : 'Noodles',
            'Type' : 'Vegetarian',
            'Discount' : '20%',
            'Old_Amount' : '340',
            'Amount' : '300'
        },
        {
            'Product' : 'Veg Biriyani',
            'Type' : 'Vegetarian',
            'Discount' : '20%',
            'Old_Amount' : '140',
            'Amount' : '80'
        },
    ]

    return(
        <ScrollView>
            <View style={ Style.addMenu}>
                <TouchableOpacity style={ Style.addButton }  onPress={ () => { navigation.push("Addmenu")} }>
                    <Text>Add Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={ Style.midView }>
                { orders.map((itm,k) => {
                    return(
                        <TouchableOpacity style={ Style.feedCart } key={ k } onPress={ () => { navigation.push("Feedview", itm )} }>
                            <View style={ Style.orderHead }>
                                 <Text style={ Style.restaurant }>
                                  { itm.Product }
                                </Text> 
                                <Text>
                                  { itm.Type }
                                </Text> 
                            </View>
                            <Text style={ Style.path }>{ itm.Old_Amount } ( { itm.Discount } )</Text>
                            <Text style={ Style.amount }>Rs  { itm.Amount } </Text>
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
    },
    addMenu : {
        width : '90%',
        marginHorizontal : '5%',
        marginTop : 10,
        borderRadius : 5,
    },
    addButton : {
        width : ScreenDisp.WidthFull,
        backgroundColor : StyleData.PriColor,
        padding : 10,
        justifyContent : 'center',
        alignItems : 'center'
    }
})


export default MenuList