const getTarefasQueries:string = 'SELECT * FROM tarefas'
const cadastrarTarefaQueries:string = 'INSERT INTO tarefas (categoria, tarefa) VALUES ($1, $2);'


export {getTarefasQueries, cadastrarTarefaQueries}