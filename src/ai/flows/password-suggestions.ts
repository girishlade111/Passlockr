'use server';

/**
 * @fileOverview Password complexity suggestions AI agent.
 *
 * - passwordComplexitySuggestions - A function that handles the password complexity suggestions process.
 * - PasswordComplexitySuggestionsInput - The input type for the passwordComplexitySuggestions function.
 * - PasswordComplexitySuggestionsOutput - The return type for the passwordComplexitySuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PasswordComplexitySuggestionsInputSchema = z.object({
  password: z
    .string()
    .describe('The password to analyze and provide complexity suggestions for.'),
});
export type PasswordComplexitySuggestionsInput = z.infer<
  typeof PasswordComplexitySuggestionsInputSchema
>;

const PasswordComplexitySuggestionsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'Actionable suggestions to improve the password complexity and strength.'
    ),
});
export type PasswordComplexitySuggestionsOutput = z.infer<
  typeof PasswordComplexitySuggestionsOutputSchema
>;

export async function passwordComplexitySuggestions(
  input: PasswordComplexitySuggestionsInput
): Promise<PasswordComplexitySuggestionsOutput> {
  return passwordComplexitySuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'passwordComplexitySuggestionsPrompt',
  input: {schema: PasswordComplexitySuggestionsInputSchema},
  output: {schema: PasswordComplexitySuggestionsOutputSchema},
  prompt: `You are a password security expert. Analyze the given password and provide actionable suggestions to improve its complexity and strength.

Password: {{{password}}}

Suggestions:`,
});

const passwordComplexitySuggestionsFlow = ai.defineFlow(
  {
    name: 'passwordComplexitySuggestionsFlow',
    inputSchema: PasswordComplexitySuggestionsInputSchema,
    outputSchema: PasswordComplexitySuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
