const express = require('express');

const app = express();

// app.get("/sum", (req, res) => {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         answer : a + b
//     })
// })
// http://localhost:3000/sum?a=4&b=5

app.get("/sum/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer : a + b
    })
})
// http://localhost:3000/sum/5/6

app.listen(3000);