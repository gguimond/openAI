const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration);

exports.handler = async function(event, context) {
  const prompt = JSON.parse(event.body).prompt + '\n\n###\n\n'
  const response = await openai.createCompletion({
    model: "ada:ft-personal-2023-01-10-11-05-36",
    prompt,
    temperature: 0,
    max_tokens: 1,
  })
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT"
    },
    body: JSON.stringify({
      "completion": response.data.choices[0].text
    })
  };
}