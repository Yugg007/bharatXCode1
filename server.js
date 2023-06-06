const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Where we will keep books
let number = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    let num = req.body.Number;
    number.push(num);    
});

app.get('/', (req, res) => {
    let sum = 0;
    for(let i=0; i<number.length; i++){
        sum += parseInt(number[i]);
    }
    console.log(sum);
    res.send(`Sum of given input is ${sum}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



//body-parser cors