import { NextApiRequest, NextApiResponse } from 'next';
import { getRecipes } from '@/lib/getRecipes';

export async function GET(request: Request, res: NextApiResponse) {
    const { searchParams } = new URL(request.url)
    // console.log("🚀 ~ file: route.ts:5 ~ GET ~ searchParams:", searchParams)
    const products = searchParams.get('products')
    // console.log("🚀 ~ file: route.ts:5 ~ GET ~ products:", products)
    const recipes = await getRecipes(products as string)
    return new Response('Hello world!')
}