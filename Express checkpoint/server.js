var express=require('express')
var lodash=require('lodash')
const app=express()
var d=new Date()

app.use((req,res,next)=>{
    var h = d.getHours()
    if( (h <= 8 || h>=17) ){res.send('Our service is out')}
    else {next()}
})

app.use(express.static(__dirname+'/public'))

app.listen(3000,(err)=>{
    if((err)) console.log ("server not connecting")
    else console.log('server connectin on port 3000...')
})


