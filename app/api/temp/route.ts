import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server'
import openai, { getRecipes } from '../../../utils/openai';

interface GenerateRecipesRequestBody {
  products: string;
}

export async function POST(req: NextApiRequest, res: NextApiResponse<any>) {
  console.log('test2')
  const input = await req.body;
  
  // const { products }: GenerateRecipesRequestBody = await JSON.parse(req.body)
  // const { products }: GenerateRecipesRequestBody = req.body;
  // const { products } = JSON.parse(req.body);
  // console.log("🚀 ~ file: route.ts:12 ~ POST ~ req.body:", await JSON.parse(req.body))
  // console.log("🚀 ~ file: generate-recipes.ts:11 ~ handler ~ products:", products)
  console.log("🚀 ~ file: generate-recipes.ts:11 ~ handler ~ req.body:", input)

  // const completions = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: "what is 2+2?",
  // });

  //THe cheapest Model?
  // const completions = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   messages: [
  //     {
  //       "role": "user",
  //       "content": "Given the following products: banana, flower, suggest a few meal options."
  //     },
  //   ],
  //   temperature: 1,
  //   max_tokens: 256,
  //   top_p: 1,
  //   frequency_penalty: 0,
  //   presence_penalty: 0,
  // });

  // console.log(completions.data.choices[0].text);
  // const response = completions.data.choices[0].text
  // const response = completions.data.choices[0].message.content

  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const response1 = await data.json()
  // console.log("🚀 ~ file: route.ts:25 ~ GET ~ response1:", response1)

  // res.status(200).json({response1});
  return NextResponse.json({response1}, { status: 200 });
  //recive user data, ask chatgpt to generate recipes, return recipes to user
  
}
