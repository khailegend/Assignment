const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8081;

app.use(express.static(path.join(__dirname, '/dist/Assignment')));


app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/Assignment/index.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});