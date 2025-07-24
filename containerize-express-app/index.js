const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const users = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//register a new user
app.post('/users', (req, res) =>{
    const newUserId = req.body.userId;
    if(!newUserId){
        return res.status(400).send('Missing UserId');
    }

    if(users.includes(newUserId)){
        return res.status(400).send('UserId already exists');
    }

    users.push(newUserId);
    return res.status(200).send('User registered');
})


// get user
app.get('/getUser', (req, res)=>{
    return res.json({
        users
    });
})

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
})