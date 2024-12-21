import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'
import { QuizContext } from '../Context/Connection'

const GuessCapital = ({ navigator }) => {
    const { isCorrect, currentQuestion, submitAnswer } = useContext(QuizContext);
    const [userans, setUserAns] = useState('');
    const [score, setScore] = useState(0);

    const checkAnswer = async () => {
        if (!userans.trim()) {
            Alert.alert("Empty Field.", "Please enter the answer.");
            return;
        }

        const correct = await submitAnswer(userans);
        if (correct) {
            setScore((prevScore) => prevScore + 1);
            Alert.alert("Correct!", "Your answer is correct.");
            setUserAns("");
        } else {
            Alert.alert("Wrong Answer", "Try again.");
            setScore(0);
            setUserAns("");
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/Images/background.jpg")}
                resizeMode='cover'
                style={styles.bgImage}
            >
                <View style={styles.quizArea}>
                    <Text style={styles.h6}>Total Score: {score}</Text>
                    <Text style={styles.h1}>What is the Capital of {currentQuestion || "Loading..."}</Text>
                    <CustomInput
                        placeholder={'Ex. New Delhi.'}
                        value={userans}
                        onChangeText={(text) => setUserAns(text)} />
                    <CustomButton title='Submit' onPress={checkAnswer} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default GuessCapital

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
        marginVertical: 25,
        textAlign: 'center',
        fontFamily: 'RobotoSerif-Medium',
    },
    h6: {
        fontSize: 14,
        fontFamily: 'RobotoSerif-Medium',
    }
})