const express = require('express');
const server = express();

//MIDDLEWARE
server.use(express.json())

const games = [
 {id: 1, name:'Call of Duty', year:2003},
 {id: 2, name:'Call of Duty 2', year:2005},
 {id: 3, name:'Call of Duty 3', year:2006},
 {id: 4, name:'Call of Duty 4: Modern Warefare', year:2007},
 {id: 5, name:'Call of Duty: World at War', year:2008}
]
server.get('/',(req, res)=>{
    res.send("Welcome to the Games")
})
server.get('/api/games',(req,res)=>{
    res.send (games)
})
server.get('/api/games/:id',(req,res)=>{
     const game = games.find(g => g.id === parseInt(req.params.id));
    if (!game) res.status(404).send("The games with the given ID was not found")
    res.send(game)
});
server.post('/api/games/',(req,res)=>{
    const game = {
        id:games.length +1,
        name:req.body.name
    }
    games.push(game);
    res.send(game);

})
server.put('/',(req,res)=>{

})
server.delete('/',(req,res)=>{

})

//PORT
const port =process.env.PORT || 3000;

server.listen(port,()=>{
    console.log(`Listening on port ${port}...`)
})