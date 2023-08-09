const express = require('express')
const app = express()
const cors = require('cors')
const User = require('./Model/User')
require('./Connection/Db')

const {Configuration , OpenAIApi} = require('openai')
const Config = new Configuration({
    apiKey:'enter your api key',
})
const openai = new OpenAIApi(Config)
app.use(cors())
app.use(express.json())



app.post('/users',(req,res)=>{
    const user = new User(req.body);
    const save = user.save();
   res.send(user)
   
})

app.post('/login',async(req,res)=>{
    const Data = await User.findOne(req.body);
    if (Data) {
      res.send(await Data);
    } else {
      res.send({ Result: "Not Found" });
    }
})

app.post('/Chat', async(req,res)=>{
    const  input  = req.body;
    
    const completion = await openai.createCompletion({
model:"text-davinci-003",
max_tokens:512,
temperature:0,
prompt:input.qst,

    })
    res.send(JSON.stringify(completion.data.choices[0].text))

})
app.get('',(req,res)=>{
    res.send('hello world')
})

app.listen(5000)
