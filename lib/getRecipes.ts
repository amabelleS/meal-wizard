import openai from "@/utils/openai";

interface inputProducts {
    products: string;
  }

export async function getRecipes(products: string) {
  const prompt = `Given the following products: ${products}, suggest a few meal options. return Ingredients, nutritional values & Instructions.`;
    //THe cheapest Model?
  const completions = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "user",
        "content": prompt
      },
    ],
    temperature: 0.9,
    // max_tokens: 256,
    top_p: 1,
    // frequency_penalty: 0,
    // presence_penalty: 0,
  });

  return completions.data.choices[0].message.content;
}