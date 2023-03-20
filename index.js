const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
    apikey: process.env.API_KEY
})

const openai = new OpenAIApi(config);

async function sentToChatGPT(message) {
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'user', 'content': message }
        ]
    })
    return response;
}

(async ()=>{
    await sentToChatGPT('Can you tell me when the state of Israel was founded')
    console.log(response.data.choices[0])
})()