// import * as PlayHT from 'playht';
// import express from 'express';
// import dotenv from 'dotenv';
// import EventEmitter from 'events';
const PlayHT = require('playht')
const express = require('express')
const dotenv = require('dotenv')

dotenv.config();

// Initialize PlayHT SDK
try {
  PlayHT.init({
    apiKey:
      process.env.PLAYHT_API_KEY,
    userId:
      process.env.PLAYHT_USER_ID,
  });
} catch (error) {
  console.log('Failed to initialise PlayHT SDK', error.message);
}

const app = express();
app.use(express.static('public'))
app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/"+"index.html")        //设置/ 下访问文件位置
});

const streamingOptions = {
  voiceEngine: "PlayHT2.0-turbo",
  voiceId:
    "s3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json",
  sampleRate: 44100,
  outputFormat: 'mp3',
  speed: 1,
};
app.get('/say-prompt', async (req, res) => {
  try {
    const { prompt } = req.query;
    if (!prompt || typeof prompt !== 'string') {
      res.status(400).send('ChatGPT prompt not provided in the request');
      return;
    }
    res.setHeader('Content-Type', 'audio/mpeg');

    const stream = await PlayHT.stream(prompt, streamingOptions);
    stream.pipe(res);
  } catch (error) {
    console.error('Error!!:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(3000, () => {
  console.log('Express server initialized');
});
