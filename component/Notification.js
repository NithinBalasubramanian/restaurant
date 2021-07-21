import React , { useState } from 'react';
import { StyleSheet, Text, View ,SafeAreaView ,ScrollView , Image , TouchableOpacity } from 'react-native';

//Styles

import { StyleData , ScreenDisp } from '../Ui/StyleData'

const notification = [
    {
        'date' : 'Jun 13, 2021',
        'notify' : 'Hello Notification test'
    },
    {
        'date' : 'Jun 11, 2021',
        'notify' : 'Your first order on the way'
    },
    {
        'date' : 'Jun 12, 2021',
        'notify' : 'Welcome to goeato'
    },
    {
        'date' : 'Jun 12, 2021',
        'notify' : 'Verfication done successfully , Greetings from goeato'
    }
]


const Notification = ({navigation}) => {

    let [ noteData , setNoteData ] = useState(notification);
    
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
                    <View style={style.Notification}>
                        <Text style={{margin:15,fontWeight:'900',fontSize:20}}>Notification</Text>
                        {(noteData.length > 0) ?
                        noteData.map((itm,k) => {
                            return(
                                <View style={style.notify} key={k}>
                                    <Text style={style.dateView}>{ itm.date }</Text>
                                    <Text style={style.notifyData}>{ itm.notify }</Text>
                                </View>
                            )
                        }) : 
                        <Image
                            source = {require('../assets/images/notification.png')}
                            resizeMode ='contain'
                            style = {{
                                width:'100%',
                                height : 420,
                                top : 40,
                                left : 0,
                            }}
                        ></Image>
                    }
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
    Notification : {
        width : '90%',
        marginHorizontal : '5%',
        marginVertical : 15,
        borderRadius : 10,
        backgroundColor : '#faf7f0',
        minHeight : 620
    },
    notify : {
        width:'100%',
        marginVertical : 2,
        padding : 10,
        paddingBottom : 15,
        minHeight : 60,
        backgroundColor : StyleData.noteColor,
    },
    dateView : {
        paddingHorizontal : 5,
        marginVertical : 2,
        fontSize : 10,
        color : StyleData.SubText,
    },
    notifyData : {
        fontSize : 16,
        paddingHorizontal : 5,
        marginVertical : 2,
        lineHeight : 24
    }
})

export default Notification