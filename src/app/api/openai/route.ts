import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const runtime = "edge";

export async function POST(request: Request) {
  const { prompt } = await request.json();

  console.log("Hello prompt", prompt);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    stream: true,
    prompt: prompt,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
