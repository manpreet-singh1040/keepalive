const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.get('/keepalive',(req,res)=>{
    console.log('keep some server alive');
    res.json({status:true});
})


/*setInterval(()=>{
    try{
        console.log('trying to fetch');
        fetch('https://chatapp-f1kr.onrender/keepalive')
        .then(res=> res.json())
        .then(res=> console.log(`fetch complete !! ${res}`))
        .catch(err=> console.error(err));
    }
    catch(err){
        console.error('Error:', err);
    }
},60000);*/
app.listen(8080,()=>{console.log('server is live!!')});