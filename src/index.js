import express from 'express';
import { lcup } from './lib/lcup.js';

const app = express();

app.use(express.json());

app.post('/lcup', (req, res) => {
    const {action, input, output} = req.body;

    const result = {
        action,
        input,
        output
    }
    console.log(result);
    res.json(result); 


});

app.listen(3000) ;