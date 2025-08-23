"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Loader2 } from 'lucide-react';
import { passwordComplexitySuggestions } from '@/ai/flows/password-suggestions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

type AiSuggestionsProps = {
  password?: string;
};

export function AiSuggestions({ password = '' }: AiSuggestionsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetSuggestions = async () => {
    setIsLoading(true);
    setSuggestions(null);
    setError(null);
    try {
      const result = await passwordComplexitySuggestions({ password });
      setSuggestions(result.suggestions);
    } catch (e) {
      setError('Failed to get suggestions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Complexity Suggestions</CardTitle>
        <CardDescription>Get AI-powered tips to improve your password.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between space-y-4">
        <div className="flex-grow">
          {suggestions && (
            <Alert>
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>Suggestions</AlertTitle>
              <AlertDescription className="whitespace-pre-wrap">{suggestions}</AlertDescription>
            </Alert>
          )}
           {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
        <Button onClick={handleGetSuggestions} disabled={isLoading || !password} className="w-full">
          {isLoading ? <Loader2 className="animate-spin" /> : <Lightbulb />}
          {isLoading ? 'Analyzing...' : 'Get AI Suggestions'}
        </Button>
      </CardContent>
    </Card>
  );
}
