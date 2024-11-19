import { openai } from '@ai-sdk/openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { groq } from '@ai-sdk/groq';
import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: groq('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'),
    middleware: customMiddleware,
  });
};
