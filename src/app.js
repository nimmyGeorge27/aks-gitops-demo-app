const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('AKS GitOps Demo App Running');
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        message: 'Service is healthy'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

module.exports = app;