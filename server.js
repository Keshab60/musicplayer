const express = require('express');
const path = require('path');
const serveIndex = require('serve-index');

const app = express();

// Serve public folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve songs and enable directory listing
app.use('/songs', express.static(path.join(__dirname, 'songs')));
app.use('/songs', serveIndex(path.join(__dirname, 'songs'), { icons: true }));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
