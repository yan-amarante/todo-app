import { Router } from "express";
import { getTarefas, cadastrarTarefa } from "./controller.js";
let tarefasRouter = Router();
tarefasRouter.get('/get-tarefas', getTarefas);
tarefasRouter.post('/cadastrar-tarefas', cadastrarTarefa);
export default tarefasRouter;
//# sourceMappingURL=routes.js.map