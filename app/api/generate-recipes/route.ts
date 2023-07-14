// import { NextApiRequest, NextApiResponse } from 'next';
// import openai, { getRecipes } from '../../../utils/openai';

// interface GenerateRecipesRequestBody {
//   products: string;
// }

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   console.log('test2')

//   //recive user data, ask chatgpt to generate recipes, return recipes to user
  
//   if (req.method === 'POST') {
//     const { products }: GenerateRecipesRequestBody = req.body;
//     console.log("🚀 ~ file: route.ts:12 ~ POST ~ req.body:", req.body)
//     console.log("🚀 ~ file: generate-recipes.ts:11 ~ handler ~ products:", products)
//     const mockProducts = 'apples, bananas, oranges'
//     const recipes = await getRecipes(mockProducts);
//     // const recipes = ["recipe 1", "recipe 2", "recipe 3"]
//     console.log("🚀 ~ file: generate-recipes.ts:12 ~ handler ~ recipes:", recipes)
//     return new Response(JSON.stringify(recipes));
//     // res.status(200).json({ recipes });
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }

// Delete or make it work?? TODO!
