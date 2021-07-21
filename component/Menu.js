import React , { useState } from 'react';
import { StyleSheet, Image , Text, View , TouchableOpacity } from 'react-native';
//Styles

import { StyleData , ScreenDisp } from '../Ui/StyleData'

const Menu = ({ onFunction }) => {

  return (
        <View style={ navBar.main } >
            <View style={ navBar.logo } >
               <Text style={ navBar.logoText }>Goeato</Text>
            </View>
            <TouchableOpacity>
              <Text style={ navBar.online }>Online</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ navBar.icon }  onPress={onFunction}>
                     <Image 
                        source ={require('../assets/notification.png')}
                        resizeMode ='contain'
                        style = {{
                            width:25,
                            height : 25,
                            margin:20,
                            tintColor : StyleData.SecondaryColor,
                        }}
                    ></Image>
            </TouchableOpacity>
        </View>
  );
}

export default Menu;

const navBar = StyleSheet.create({
  main: {
    width: '100%',
    height: 75,
    backgroundColor: StyleData.PriColor,
    overflow: 'hidden',
    flexDirection: "row",
    flexWrap: "wrap",
    padding : 15,
  },
  logo: {
    width : '55%',
    height : '100%',
    backgroundColor : StyleData.PriColor,
    marginVertical : 15,
  },
  logoText : {
      fontSize : 24,
  },
  logoImg : {
      width : '75%',
      height : 60,
      margin: 4,
  },
  icon : {
      width : '20%',
      height : 60,
      backgroundColor : StyleData.PriColor,
  },
  mainNavListOff : {
      display : 'none',
  },
  mainNavListOn : {
      width : '100%',
      height : 600,
      backgroundColor : StyleData.PriColor,
      display : 'flex',  
  },
  online : { 
    paddingVertical : 5,
    paddingHorizontal : 10,
    marginTop : 20,
    marginHorizontal : 10,
    backgroundColor : 'green' ,
    color : StyleData.White ,
    borderRadius : 10 
  }
});
