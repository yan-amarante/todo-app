import pg from "pg";
const database = new pg.Client('URL DATABASE');
database.connect((erro) => {
    if (erro) {
        return console.log("Não foi possivel conectar com o ElephantSQL", erro);
    }
    else {
        return console.log("Conectado ao ElephantSQL!");
    }
});
export default database;
//# sourceMappingURL=db.js.map