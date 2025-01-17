



const express = require('express');
const qr = require('qr-image');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Define the QR code generation endpoint
app.get('/generate', (req, res) => {
    const link = req.query.link;
    if (!link) {
        return res.status(400).send('Invalid link');
    }
    const qrCode = qr.image(link, { type: 'png', size: 10 });
    res.type('png');
    qrCode.pipe(res);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
