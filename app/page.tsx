'use client';

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { getRecipes } from '@/lib/getRecipes';

// interface RecipeResponse {
//   recipes: string;
// }

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
      const recipes = await getRecipes({products});
      console.log("🚀 ~ file: page.tsx:23 ~ handleGenerateRecipes ~ recipes:", recipes)
      // console.log('test1')
      // const response = await fetch('/api/temp', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   // body: products,
      //   body: JSON.stringify({ products }),
      // });
      // console.log("🚀 ~ file: page.tsx:27 ~ handleGenerateRecipes ~ response:", response)
      // const data: RecipeResponse = await response.json();
      setRecipes(recipes);
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
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2 text-teal-400">Loading...</h2>
        </div>
      )}
    </div>
  );
}