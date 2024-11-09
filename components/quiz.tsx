"use client";

import { useState } from "react";
import { QuizQuestion } from "./quiz-question";
import { QuizResult } from "./quiz-result";
import { useQuiz } from "@/hooks/use-quiz";

export function Quiz() {
  const {
    currentQuestion,
    selectedAnswer,
    score,
    isFinished,
    progress,
    handleAnswerSelect,
    handleNextQuestion,
    resetQuiz,
  } = useQuiz();

  if (isFinished) {
    return <QuizResult score={score} onReset={resetQuiz} />;
  }

  return (
    <QuizQuestion
      currentQuestion={currentQuestion}
      selectedAnswer={selectedAnswer}
      progress={progress}
      onAnswerSelect={handleAnswerSelect}
      onNextQuestion={handleNextQuestion}
    />
  );
}