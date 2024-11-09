"use client";

import { useState } from "react";
import { questions } from "@/lib/questions";

export function useQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setIsFinished(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer("");
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setIsFinished(false);
  };

  return {
    currentQuestion,
    selectedAnswer,
    score,
    isFinished,
    progress,
    handleAnswerSelect,
    handleNextQuestion,
    resetQuiz,
  };
}