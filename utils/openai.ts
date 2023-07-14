const { Configuration, OpenAIApi } = require("openai");


interface GetRecipesResponse {
    choices: { text: string }[];
}

const apiKey = process.env.OPENAI_API_KEY;
const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions'
const configuration = new Configuration({
    apiKey: apiKey,
    // apiKey: process.env.OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

export default openai;

export async function getRecipes(products: string): Promise<string[]> {
    const prompt = `Given the following products: ${products}, suggest a few meal options.`;

    //this is the url for the openai api for the davinci codex engine / gpt-3.5-turbo
    ;
    // const apiUrl = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions';

    //
    
  
    // const response = await fetch(apiUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${apiKey}`,
    //   },
    //   body: JSON.stringify({
    //     prompt,
    //     max_tokens: 100,
    //     temperature: 0.7,
    //     n: 3,
    //   }),
    // });

    // const response = await openai.createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //       {
    //         "role": "user",
    //         "content": ""
    //       },
    //       {
    //         "role": "assistant",
    //         "content": `Given the following products: ${products}, suggest a few meal options.`
    //       }
    //     ],
    //     temperature: 1,
    //     max_tokens: 256,
    //     top_p: 1,
    //     frequency_penalty: 0,
    //     presence_penalty: 0,
    //   });

    const chatCompletion = await openai.createChatCompletion({
        // model: "gpt-3.5-turbo",
        // messages: [
        //     {role: "user", content: `Given the following products: ${products}, suggest a few meal options.`}
        // ],
        model: "text-davinci-003",
        prompt: prompt,
      });
  
    console.log(chatCompletion.data.choices[0].message);
    // if (!response.ok) {
    //   throw new Error('Error: Failed to fetch recipes');
    // }
  
    // const data: GetRecipesResponse = await response.json();
    // console.log("🚀 ~ file: openai.ts:62 ~ getRecipes ~ data:", data)
    // const recipes = data.choices.map((choice) => choice.text.trim());
  
    return chatCompletion.data.choices;
    // return ['recipes']
    // return data.choices.map((choice) => choice.text.trim());
    // return recipes;
  }
  
  // 



