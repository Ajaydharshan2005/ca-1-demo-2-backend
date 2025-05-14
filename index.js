const express=require('express');
const app=express();
app.use(express.json());
PORT=3000

app.get('/',(req,res)=>{
    res.send('server is running');
});

app.post('/login',(req,res)=>{
    const{username,email,password,dateofbirth}=req.body;
});


if(!username){
    return res.status(400).json({message:"Username cannot be empty"})
}

if(!email){
    return res.status(400).json({message:"Email cannot be empty"})
};

if(!password){
    return res.status(400).json ({message:"Password length should be greater than 8 or less than or equal to 16 "})
};

if(!dateofbirth){
    return res.status(400).json ({message:"dateofbirth cannot be empty"})
};

return res.status(200).json({ 
    message:"login successful",
    data:{
        email: email
    }

});
//port
app.listen(3000,()=>{
    console. log(`server is running on http://localhost:${PORT}`);

});