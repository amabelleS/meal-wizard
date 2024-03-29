'use client';

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { getRecipes } from '@/lib/getRecipes';

interface RecipeResponse {
  recipes: string;
}

const Loading = () => (
  <div className="mt-4 flex items-center">
    <h2 className="text-2xl font-bold text-teal-400 animate-pulse">Loading...</h2>
    <svg className="animate-spin h-7 w-7 ml-6 text-teal-400" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
  </div>
)

export default function Home() {
  const [products, setProducts] = useState('');
  const [recipes, setRecipes] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  
  const handleProductChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setProducts(event.target.value);
  };
  
  const handleGenerateRecipes = async () => {
    setLoading(true);
    try {
      // OPTION 1: Use getRecipes function
      // const recipes = await getRecipes(products);
      // setRecipes(recipes);

      // OPTION 2: Making a fetch request / GET
      // const response = await fetch(`/api/recipes?products=${products}`, {
      //   method: 'GET',
      // });

      // OPTION 3: Making a fetch request / POST
      const response = await fetch(`/api/recipes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: products,
        body: JSON.stringify({ products }),
      });
      
      const data: RecipeResponse = await response.json();
      console.log("🚀 ~ file: page.tsx:53 ~ handleGenerateRecipes ~ data:", data.recipes)
      setRecipes(data.recipes);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="container bg-black mx-auto p-8 h-full">
    {/* <div className="container bg-stone-900 mx-auto p-8 h-full"> */}
      <div className="flex justify-between items-center mt-4 mb-6">
        <h1 className="text-3xl font-bold text-teal-400">Meal Wizard</h1>
        <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
            width={88}
            height={77}
            alt="Openai logo"
            className='hover:motion-safe:animate-pulse text-teal-400'
            // style={{ filter: 'invert(1)', color: '#2dd4bf', backgroundColor: '#2dd4bf' }}
            style={{ color: '#2dd4bf', filter: 'invert(1)' }}
        />
      </div>
      <textarea
        rows={4}
        cols={50}
        value={products}
        onChange={handleProductChange}
        placeholder="Enter your products, separated by commas"
        className="w-full p-2 mb-4 text-black border border-gray-300 rounded"
      />
      <button
        onClick={handleGenerateRecipes}
        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
      >
        Generate Recipes
      </button>
      {recipes && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2 text-teal-400">Recipes:</h2>
          <pre className="whitespace-pre-wrap text-teal-50">{recipes}</pre>
        </div>
      )}
      {loading && (
        // <div className="mt-4">
        //   <h2 className="text-2xl font-bold mb-2 text-teal-400">Loading...</h2>
        // </div>
        <Loading />
      )}
    </div>
  );
}