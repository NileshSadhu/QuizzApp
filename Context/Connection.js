import React, { useState, useContext, createContext, useEffect } from 'react'
import axios from "axios";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [currentQuestion, setCurrentQuestion] = useState("");
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


    useEffect(() => {
        getQuestion();
    }, []);


    return (
        <QuizContext.Provider value={{ isCorrect, currentQuestion, submitAnswer }}>
            {children}
        </QuizContext.Provider>
    )
}