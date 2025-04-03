const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.get('/keepalive',(req,res)=>{
    console.log('keep some server alive');
    res.json({status:true});
})

app.get('/',(req,res)=>{
    console.log('got a request');
    res.json({status:true, mes:"server is running"});
})


setInterval(()=>{
    try{
        console.log('trying to fetch');
        fetch('https://chatapp-f1kr.onrender.com/keepalive')
        .then(res=> res.json())
        .then(res=> console.log(`fetch complete !! ${res}`))
        .catch(err=> console.error(err));
    }
    catch(err){
        console.error('Error:', err);
    }
},60000);
app.listen(8080,()=>{console.log('server is live!!')});
