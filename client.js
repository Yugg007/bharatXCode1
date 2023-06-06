const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    let sum = parseInt(a) + parseInt(b);
    res.send(`
    <div>
        <h3>Welcome to Client Side</h3>
        Sum of ${a} and ${b} is ${sum}
    </div>`
    );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})