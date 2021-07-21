import React , { useState } from 'react';
import { StyleSheet, Image , Text, View , ScrollView , TextInput , Alert ,TouchableOpacity } from 'react-native';

//Styles

import { StyleData , ScreenDisp } from '../Ui/StyleData'

//axios

import axios from 'axios'

//redux

import { useDispatch , useSelector } from 'react-redux'
import { LogManage } from '../action/index'


const Login = ({ navigation }) => {

    const initialState = {
        'email' : '',
        'password' : '',
    }

    let [ data , setData ] = useState(initialState);

    //alerting states

    let [ alertState , setAlertState ] = useState(false);

    let [ nullStatus , setNullStatus ] = useState(false);

    let Dispatch = useDispatch();

    const loggAuth = async (e) => {

        e.preventDefault();

        if(data.email !== '' && data.password !== ''){

            const datapayload = {
                'email' : data.email,
                'password' : data.password
            }

            console.log(datapayload);

            await axios.post('http://goeato.infonixmedia.in/Api/login/restaurant',datapayload,{
                headers : {
                    'Content-Type' : 'multipart/form-data'
                }
            })
            .then(res=>{

                console.log(res.data);

                //logged Auth

                if(res.data === 1){
                    setAlertState(false);
                    setNullStatus(false);
                    Dispatch(LogManage());
                    console.log(log);
                    console.log(listlog);
                    navigation.push("Home");
                    setData(initialState);
                }
                
                //incorrect Auth

                else{
                    setData(initialState);
                    setAlertState(true);
                    setNullStatus(false);
                }
            })
            .catch(err=>{
                console.log(err);
            })
        }else{

            //if data fields are empty
            setAlertState(false);
            setData(initialState);
            setNullStatus(true);
        }
    }


    let log = useSelector( state => state.LogState);

    let listlog = useSelector( state => state);

    const alertData = () => {

        //if incorrect password or email

        if(alertState){
            return(
                <View style={ style.alert }>
                    <Text>Email or Password is incorrect</Text> 
                </View>
            )
        }

        //if submitted with no data entered

        if(nullStatus){
            return(
                <View style={ style.nullData }>
                    <Text>Enter the Fields</Text> 
                </View>
            )
        }
    }


    return(
        <View style={ style.log }>
            <ScrollView style={style.logPart} >
                <Text style={ style.signHead }>SIGN IN</Text>

                {/* Alert Design */}
                { alertData() }

                <Text style={ style.label }>Email</Text>
                <TextInput
                 style={ style.formInput}
                 placeholder="Example@email.com"
                 value={ data.email } 
                 onChangeText={ (text) => {  
                    setData(prev => { return {...prev,email : text}}); 
                    }
                } />

                <Text style={ style.label }>Password</Text>
                <TextInput 
                 style={ style.formInput} 
                 placeholder="********"  
                 secureTextEntry={true} 
                 value={ data.password }  
                 onChangeText={ (text) => {  
                     setData(prev => { return {...prev,password : text}}); 
                     }
                } />

                <Text style={ style.forgot }>
                    Forgot Password
                </Text>

                <TouchableOpacity 
                    style={ style.logButton } 
                    onPress={ loggAuth } >
                    <Text>SIGN IN</Text>
                </TouchableOpacity>

                <Text style={ style.signUp }>Not a member , Register</Text>

            </ScrollView>
        </View>
    )
}

export default Login

const style = StyleSheet.create(
    {

        log : {
            width : ScreenDisp.WidthFull,
            minHeight : 800,
            backgroundColor : StyleData.White
        },
        logPart : {
            width : ScreenDisp.WidthFull,
            marginTop : 120,
            marginBottom : 20,
        },
        signHead : {
            fontSize : 20,
            fontWeight : '700',
            textAlign : 'center',
            letterSpacing : 1,
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
        logButton : {
            width : '90%',
            marginHorizontal : '5%',
            backgroundColor : StyleData.PriColor,
            marginVertical : 25,
            padding : 10,
            justifyContent : 'center',
            alignItems : 'center',
            borderRadius : 5,
        },
        forgot : {
            color : StyleData.shadeColor,
            fontSize : 12,
            letterSpacing : 1,
            marginHorizontal : '5%',
            marginTop : 10,
            textAlign : 'right',
        },
        signUp : {
            marginHorizontal : '5%',
            letterSpacing : 1,
        },
        alert : {
            width : '90%',
            marginHorizontal : '5%',
            backgroundColor : StyleData.alertColor,
            marginTop : 10,
            padding : 10,
            borderRadius : 5,
        },
        nullData :{
            width : '90%',
            marginHorizontal : '5%',
            backgroundColor : StyleData.warningColor,
            marginTop : 10,
            padding : 10,
            borderRadius : 5,
        },
    }
)