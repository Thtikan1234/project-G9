const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

// ===== Dining Menu =====
app.get("/api/dining",(req,res)=>{
    res.json([
        {name:"Fish & Chips",price:150},
        {name:"Grilled Salmon",price:225},
        {name:"Tom Yum",price:100},
        {name:"Truffle Steak",price:290}
    ])
})

// ===== Bar Menu =====
app.get("/api/bar",(req,res)=>{
    res.json([
        {name:"Piña Colada",price:120},
        {name:"Coke",price:30},
        {name:"Red Wine",price:150},
        {name:"Water",price:20},
        {name:"Green Tea",price:45}
    ])
})

app.listen(3000,()=>{
    console.log("Server running http://localhost:3000")
})