import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.btnTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn:{
        backgroundColor: '#ffca00',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    btnTitle: {
        textAlign: 'center',
        fontFamily: 'RobotoSerif-Medium',
    },
})