const express = require('express')
const app = express()
const path = require('path')
const mongoose = require("mongoose")
const Data = require('./models/Data')

app.use(express.urlencoded({extended:true}))
app.set('view engine',"ejs")
app.set('views',path.join(__dirname,'views'))

// jakBc8baNytLdCkf
mongoose.connect('mongodb+srv://mello:jakBc8baNytLdCkf@test.dzq79os.mongodb.net/?retryWrites=true&w=majority', {
    user: 'mello',
    pass: 'jakBc8baNytLdCkf',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('mongo Connected')
    })
    .catch((err) => {
        console.log(err)
    })


app.get('/',async(req,res)=>{
   res.render('break')
})
app.post('/startTimerDate',(req,res)=>{
    console.log(req.body)
})
app.post('/stopTimerDate',async(req,res)=>{
    const {startDate, stopDate,totalTime} = req.body
    const data = new Data({startDate:startDate,stopDate:stopDate,totalTime:totalTime})
    await data.save()
        .then(dat => {
            console.log(dat)
        }).catch(err => {
            console.log(err)
        })
    res.redirect('/allBreaks')
})

app.get('/allBreaks',async(req,res)=>{
    const breaks = await Data.find({}).sort({_id:-1})
    res.render('allBreak',{breaks})
})

app.listen('8080',()=>{
    console.log('listening.......')
})