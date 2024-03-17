const OpenAI = require('openai');
const fs = require('fs');
// import fs from "fs";


const openai = new OpenAI();

console.log(openai.apiKey);


async function main() {

  //Text thing
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a sarcastic and funny Assistant that answers in very short sentences"},
        {"role": "user", "content": "What is ETHGlobal London?"},
        {"role": "assistant", "content": "Just look it up? Something wtih nerds coding on blochchain "},
        {"role": "user", "content": "What is the best project that was built there?"}],
    model: "gpt-3.5-turbo",
  });

  // console.log(completion.choices[0]);

  

  // const response = await openai.createImage({
  //   model: "dall-e-3",
  //   prompt: "a white siamese cat",
  //   n: 1,
  //   size: "1024x1024",
  // });
  // image_url = response.data.data[0].url;

  // console.log(image_url);

// Image thing
  // const response = await openai.chat.completions.create({
  //   model: "gpt-4-vision-preview",
  //   messages: [
  //     {
  //       role: "user",
  //       content: [
  //         { type: "text", text: "What is this person doing?" },
  //         {
  //           type: "image_url",
  //           image_url: {
  //             "url": "https://gpjjfwpofdzshwmhomci.supabase.co/storage/v1/object/sign/Random/im2.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJSYW5kb20vaW0yLmpwZWciLCJpYXQiOjE3MTA1OTYzNTcsImV4cCI6MTcxMTIwMTE1N30.xSiXXW1DHRSmAidr2xuVJ4hr5--ZbaCKnOYLYCSYMyc&t=2024-03-16T12%3A39%3A13.638Z",
  //           },
  //         },
          
  //       ],
  //     },
  //   ],
  //   max_tokens: 150,
  // });
  // console.log(response.choices[0]);

  // Image but better
  // const image = await openai.images.generate({ model: "dall-e-3", prompt: "Tesla Model 3 Performence 2024" , style:"vivid"});

  // console.log(image.data);

  // const image = await openai.images.createImageVariation(
  //   fs.createReadStream("im2.png"),
  //   "dall-e-2",
  //   1,
  //   "1024x1024"
  // );

  // console.log(image.data);

}
main();
