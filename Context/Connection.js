import React, { useState, useContext, createContext, useEffect } from 'react'
import axios from "axios";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [currentQuestion, setCurrentQuestion] = useState("");
    const [currentFlag, setCurrentFlag] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);

    const getQuestion = async () => {
        try {
            const response = await axios.get("http://192.168.213.196:3000/question");
            const { country } = response.data;
            setCurrentQuestion(country);
        } catch (error) {
            console.log("Error while fetching Quiz question.", error);
        }
    }

    const getFlag = async () => {
        try {
            const response = await axios.get("http://192.168.213.196:3000/flag");
            const { flag } = response.data;
            setCurrentFlag(flag);
            console.log("Fetched flag:", flag);

        } catch (error) {
            console.log("Didn't received flag.", error);
        }
    }

    const submitAnswer = async (answer) => {
        try {
            const response = await axios.post("http://192.168.213.196:3000/submit", {
                answer,
            });
            const data = response.data;
            setIsCorrect(data.isCorrect);
            setCurrentQuestion(data.nextCountry);
            return data.isCorrect;
        } catch (error) {
            console.log("Error while submitting Quiz answer:", error);
            return false;
        }
    };

    const submitFlagAnswer = async (answer) => {
        try {
            const response = await axios.post("http://192.168.213.196:3000/submitflag", {
                answer,
            });
            const data = response.data;
            setIsCorrect(data.isCorrect);
            setCurrentFlag(data.nextflag);
            return data.isCorrect;
        } catch (error) {
            console.log("Error while submitting Quiz answer:", error);
            return false;
        }
    }

    useEffect(() => {
        getQuestion();
        getFlag();
    }, []);

    useEffect(() => {
        console.log("Current flag updated:", currentFlag);
    }, [currentFlag]);


    return (
        <QuizContext.Provider value={{ isCorrect, currentQuestion, submitAnswer, currentFlag, submitFlagAnswer }}>
            {children}
        </QuizContext.Provider>
    )
}