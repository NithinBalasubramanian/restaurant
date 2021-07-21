import React , { useState } from 'react';
import { StyleSheet, Image , Text, View , ScrollView , TextInput , Alert ,TouchableOpacity } from 'react-native';

//Styles

import { StyleData , ScreenDisp } from '../Ui/StyleData'

const ManageProfile = () => {
    return(
        <View style={ style.profilePage }>
            <Text>Manage profile</Text>
        </View>
    )
}

export default ManageProfile

const style = StyleSheet.create({
    profilePage : {
        width : '100%',
        fontSize : 18,
        backgroundColor : StyleData.PriColor
    }
})