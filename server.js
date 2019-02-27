let express = require("express")

let server = express()
server.use (express.json() )
server.use(express.static("./static"))

let messages = [
    {sender:"Viki", message:"Hallo" },
    { sender:"hkju", message:"IDHF"  },
    
]


server.get("/messages", (req, res) => {
res.send( messages )

}
 )


 server.post("/messages", (req, res) => {

 } )

 server.listen(8080)