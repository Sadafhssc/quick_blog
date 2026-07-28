import {GoogleGenAI} from '@google/genai';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: 'gemini-3.6-flash',
    contents: prompt,
  });
   return response.text;
}
export default main;