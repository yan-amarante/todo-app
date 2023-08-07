import "./SideBar.css"
import { useEffect, useState } from "react"

function SideBar() {

    const [tarefas, setTarefas] = useState<any[]>([])

    useEffect(() => {
        chamarApi();
    }, [])

    async function chamarApi() {
        const res = await fetch("https://api-todopern.onrender.com/api/v1/tarefas/get-tarefas");
        const data = await res.json();
        setTarefas(data.tarefas)
    }

    const listaCategorias = tarefas.map(lista =>
        <ul className="lista-categorias-sidebar" key={lista.id}>
            <li>
                <button className="botao-lista-sidebar">
                    <h1 className="titulo-lista-sidebar">{lista.categoria}</h1>
                </button>
            </li>
        </ul>
    )

    return (
        <div className="container-sidebar">
            {listaCategorias}
            <button className="botao-sidebar">
                <p className="texto-botao-sidebar">Adicionar Categoria</p>
            </button>
        </div>
    )
}

export default SideBar