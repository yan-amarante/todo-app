import  Express  from "express"
import tarefasRouter from "./src/tarefas/routes.js";
import bodyParser from "body-parser";

const app = Express();
const port:number = 3000;

app.use(bodyParser.json());

app.use('/api/v1/tarefas/', tarefasRouter);

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))

