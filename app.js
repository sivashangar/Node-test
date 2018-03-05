const express = require('express');
const app = express();

app.get('/', (req, res) => {
   // res.send('Hello REFE!')
   res.status(200).json({
       message: 'It works as expected'
   })
})
app.post('/', (req, res) => {
    // res.send('Hello REFE!')
    res.status(200).json({
        message: 'Post'
    })
 })

app.listen(8080, () => console.log('Example app listening on port 8080!'))