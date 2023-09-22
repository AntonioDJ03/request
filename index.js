const express = require("express")

const app = express()

app.get("/:user/:password",(req,res) => { //Endpoint
    const {user,password} = req.params
    if(user == 'antonio' && password == '123'){
        res.json({msg:'Inicio de sesion exitoso'})
        return
    }
        res.json({msg:'Fallo en el usuario y contraseña'})
    })

//http://localhost:3000/login?user=antonio&password=123
app.get('/login',(req, res) =>{
    const {user,password} = req.query
    if(!user || !password){
        res.status(400).json({msg:'You need to provide <user> and <password> paramas'})
    }

    if(user == 'antonio' && password == '123'){
        res.json({msg:'sign In succesfully'})
        return
    }
    res.status(404).json({msg:'wrong user or password'})
    })  

app.post("/",(req,res) => {
    res.json({
        msg:'Hello Post'
    })
})


app.put("/",(req,res) =>{
    res.json({
        msg:'Hello put'
    })
})

app.patch("/",(req,res) =>{
    res.json({
        msg:'Hello PATCH'
    })
})

app.delete("/",(req,res) =>{
    res.json({
        msg:'Hello DELETE'
    })
})


app.listen(3000,() =>{
    console.log("listening on port 3000")
})