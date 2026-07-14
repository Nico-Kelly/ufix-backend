const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

//health check

app.get('/health', (req,res) => {
    res.json({status: 'ok', timestamp: new Date()});
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

