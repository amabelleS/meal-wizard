import { NextResponse } from 'next/server'
import { getRecipes } from '@/lib/getRecipes';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    // console.log("🚀 ~ file: route.ts:5 ~ GET ~ searchParams:", searchParams)
    const products = searchParams.get('products')
    console.log("🚀 ~ file: route.ts:5 ~ GET ~ products:", products)
    const recipes = await getRecipes(products as string)
    // console.log("🚀 ~ file: route.ts:10 ~ GET ~ recipes:", recipes)
    // return new Response('Hello world!')
    return NextResponse.json({ recipes })
}

export async function POST() {
   
   
   
    // return NextResponse.json(data)
  }

