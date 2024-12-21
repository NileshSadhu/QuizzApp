import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomButton from './CustomButton'
import CustomInput from './CustomInput'
import { QuizContext } from '../Context/Connection'

const GuessCountry = ({ navigator }) => {
    const { isCorrect, currentFlag, submitFlagAnswer } = useContext(QuizContext);
    const [userFlag, setUserFlag] = useState('');
    const [score, setScore] = useState(0);

    const checkFlag = async () => {
            if (!userFlag.trim()) {
                Alert.alert("Empty Field.", "Please enter the answer.");
                return;
            }
    
            const correct = await submitFlagAnswer(userFlag);
            if (correct) {
                setScore((prevScore) => prevScore + 1);
                Alert.alert("Correct!", "Your answer is correct.");
                setUserFlag("");
            } else {
                Alert.alert("Wrong Answer", "Try again.");
                setScore(0);
                setUserFlag("");
            }
        }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/Images/countrys.png")}
                resizeMode='cover'
                style={styles.bgImage}
            >
                <View style={styles.quizArea}>
                    <Text style={styles.h6}>Total Score: {score}</Text>
                    <Text style={styles.h1}>{currentFlag || "Loading.."}</Text>
                    <CustomInput
                        placeholder={'Ex. India.'}
                        value={userFlag}
                        onChangeText={(text) => setUserFlag(text)}
                    />
                    <CustomButton title='Submit' type={'SECONDARY'} color={'white'} onPress={checkFlag}/>
                </View>
            </ImageBackground>
        </View>
    )
}

export default GuessCountry

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quizArea: {
        width: '90%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    h1: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 50,
        // fontFamily: 'RobotoSerif-Medium',
    },
    h6: {
        fontSize: 14,
        fontFamily: 'RobotoSerif-Medium',
    }
})