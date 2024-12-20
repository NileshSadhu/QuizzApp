import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = ({placeholder, onChangeText, value}) => {
    return (
        <View>
            <TextInput 
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                style={styles.input}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderColor: '#cfcfcf',
        fontFamily: 'RobotoSerif-Medium',
    }
})