import { openai } from './ai';

export const runLLM = async ({ userMessage }: { userMessage: string }) => {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: userMessage,
      },
    ],
    model: 'gpt-4o-mini',
    temperature: 0.1,
  });

  return response.choices[0].message.content;
};
