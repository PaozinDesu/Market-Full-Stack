import bodyParser from "body-parser";
import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({origin: '*'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req: Request, res: Response) => {
 res.json({ message: 'Welcome to the Express + TypeScript Server!' });
});

app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});