"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Brain, TimerIcon } from "lucide-react";
import { questions } from "@/lib/questions";

interface QuizQuestionProps {
  currentQuestion: number;
  selectedAnswer: string;
  progress: number;
  onAnswerSelect: (value: string) => void;
  onNextQuestion: () => void;
}

export function QuizQuestion({
  currentQuestion,
  selectedAnswer,
  progress,
  onAnswerSelect,
  onNextQuestion,
}: QuizQuestionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <CardTitle>Question {currentQuestion + 1}</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <TimerIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {progress}%
              </span>
            </div>
          </div>
          <Progress value={progress} className="mt-2" />
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg font-medium">
            {questions[currentQuestion].question}
          </p>
          <RadioGroup
            value={selectedAnswer}
            onValueChange={onAnswerSelect}
            className="space-y-3"
          >
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
              >
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button
            onClick={onNextQuestion}
            disabled={!selectedAnswer}
            className="w-full"
            size="lg"
          >
            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}