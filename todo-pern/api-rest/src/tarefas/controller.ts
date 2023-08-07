import database from "../db.js";
import { getTarefasQueries, cadastrarTarefaQueries} from "./queries.js"
import { Request, Response } from "express";

const getTarefas = (req:Request, res:Response) => {
    database.query(getTarefasQueries).then(
        (resultado) => {
            res.status(200).send({ tarefas: resultado.rows })
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
    }

const cadastrarTarefa = (req:Request, res:Response) => {
        const values = [req.body.categoria, req.body.tarefa]   
        database.query(cadastrarTarefaQueries, values).then(
            () => {
                res.status(200).send({ mensagem: "tarefa cadastrada com sucesso!"})
            },
            (erro) => {
                res.status(500).send({ erro: erro })
            }
        )
    };

export { getTarefas, cadastrarTarefa }
