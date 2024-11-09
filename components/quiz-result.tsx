"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import { questions } from "@/lib/questions";

interface QuizResultProps {
  score: number;
  onReset: () => void;
}

export function QuizResult({ score, onReset }: QuizResultProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-3xl font-bold">
            <Trophy className="h-8 w-8 text-yellow-500" />
            Quiz Complete!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-2xl font-semibold">Your Score</p>
            <p className="text-4xl font-bold text-primary mt-2">
              {score} / {questions.length}
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <Button onClick={onReset} size="lg">
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}