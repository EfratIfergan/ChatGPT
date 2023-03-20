const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
    apikey: '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'
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
    await sentToChatGPT('מתי הוקמה מדינת ישראל?')
    console.log(response.data.choices[0])
})()