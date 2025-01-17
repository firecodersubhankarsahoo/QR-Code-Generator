const express = require('express');
const qr = require('qr-image');
const app = express();

app.use(express.static('public'));

app.get('/generate', (req, res) => {
    const link = req.query.link;
    const qrCode = qr.image(link, { type: 'png', size: 10, color: '#0000ff' });
    res.type('png');
    qrCode.pipe(res);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
