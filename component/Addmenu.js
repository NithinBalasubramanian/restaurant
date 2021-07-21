import React , { useState } from 'react'
import { StyleSheet, Image , Text, View , ScrollView , TextInput ,Alert ,TouchableOpacity } from 'react-native';

//Styles

import { StyleData , ScreenDisp } from '../Ui/StyleData'

//axios

import axios from 'axios'

const Addmenu = ({ navigation }) => {

    const initialState = {
        'product' : '',
        'price' : '',
        'image' : '',
        'description' : '',
    }

    let [ data , setData ] = useState(initialState);

    const menuInsert = async() => {

        console.log(data);

        await axios.post('https://goeato.com/Api/insertData/products',data,{
                headers : {
                    'Content-Type' : 'multipart/form-data'
                }
            })
            .then( res => {
                console.log('Inserted');
                setData(initialState);
            })
            .catch(err=>{
                console.log(err);
            })
    }

    return(
        <ScrollView style={style.menuAdd} >
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

            <View style={ style.menuView }>
                <Text style={ style.heading }>Add Menu</Text>

                <Text style={ style.label }>Product Name</Text>
                <TextInput
                 style={ style.formInput}
                 placeholder="Product Name"
                 value={ data.product } 
                 onChangeText={ (text) => {  
                    setData(prev => { return {...prev,product : text}}); 
                    }
                } />

                <Text style={ style.label }>Price</Text>
                <TextInput
                 style={ style.formInput}
                 placeholder="Price"
                 value={ data.price } 
                 onChangeText={ (text) => {  
                    setData(prev => { return {...prev,price : text}}); 
                    }
                } />

                <Text style={ style.label }>Image</Text>
                <TextInput
                 style={ style.formInput}
                 placeholder="Image"
                 value={ data.image } 
                 onChangeText={ (text) => {  
                    setData(prev => { return {...prev,image : text}}); 
                    }
                } />

                <Text style={ style.label }>Description</Text>
                <TextInput
                 style={ style.formInput}
                 placeholder="Description"
                 value={ data.description } 
                 multiline = {true}
                 numberOfLines = {4}
                 onChangeText={ (text) => {  
                    setData(prev => { return {...prev,description : text}}); 
                    }
                } />

                <TouchableOpacity 
                    style={style.addButton}
                    onPress={ menuInsert }  >
                    <Text>Add Menu</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

export default Addmenu

const style = StyleSheet.create({
    menuAdd : {
        width : ScreenDisp.WidthFull,
    },
    heading : {
        textAlign : 'center',
        fontSize : 18,
        marginVertical : 15,
    },
    back : {
        width : '100%',
        height:80,
        backgroundColor : StyleData.PriColor
    },
    menuView : {
        width : ScreenDisp.WidthFull,
        marginVertical : 30,
    },
    formInput : {
        width : '90%',
        marginHorizontal : '5%',
        backgroundColor : StyleData.shadeColor,
        borderRadius : 5,
        padding : 5,
        paddingLeft : 20,
    },
     formInput : {
        width : '90%',
        marginHorizontal : '5%',
        backgroundColor : StyleData.shadeColor,
        borderRadius : 5,
        padding : 5,
        paddingLeft : 20,
    },
    label : {
        fontSize:14,
        letterSpacing : 1,
        marginVertical : 10,
        marginHorizontal : '5%'
    },
    addButton : {
        width : '90%',
        marginHorizontal : '5%',
        backgroundColor : StyleData.PriColor,
        marginVertical : 25,
        padding : 10,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 5,
    },
})
