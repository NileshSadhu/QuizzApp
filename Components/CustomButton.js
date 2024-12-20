import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress, type="PRIMARY", color}) => {
    return (
        <TouchableOpacity style={[styles.btn, styles[`container_${type}`]]} onPress={onPress}>
            <Text style={[styles.btnTitle, styles[`text_${color}`]]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn:{
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    btnTitle: {
        textAlign: 'center',
        fontFamily: 'RobotoSerif-Medium',
    },
    container_PRIMARY: {
        backgroundColor: '#ffca00',
    },
    container_SECONDARY: {
        backgroundColor: "#465f78",
    },
    text_white: {
        color: "#fff",
    },
    text_black: {
        color: '#000',
    },
})