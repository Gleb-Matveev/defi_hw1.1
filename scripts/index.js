const express = require('express');
const app = express();


const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '\images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

const port = 8080

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/api/upload', upload.single('image'), (req, res) => {
    res.json(req.file);
});

app.listen(port, () => {
    console.log('listnenig on port:' + port);
});