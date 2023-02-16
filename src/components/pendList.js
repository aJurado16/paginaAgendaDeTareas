import React from "react";

export default function PendList ({pend, setPend, pendientes, setListUpdated}) {

    const handleDelete = (id)=> {
        //consulta
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    const handleUpdate = (id)=> {
        //validacion de los datos descripcion no puede ser null
        if(pend.descripcion === "") {
            alert("No escribiste nada, por favor escribe un pendiente.")
            return
        }

        //consulta
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pend)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //Reinicio del state
        setPend({descripcion: ''})

        setListUpdated(true)
    }


    return (
        <div className="container">
            <table className= "table table-hover">
                <thead className="">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Pendiente</th>
                    </tr>
                </thead>
                <tbody>
                    {pendientes.map(pendiente => (
                        <tr key={pendiente.id}>
                            <td>{pendiente.id}</td>
                            <td>{pendiente.descripcion}</td>
                            <td>
                                <div className="mb-3">
                                    <button onClick={() => handleDelete(pendiente.id)} className="btn btn-danger">Borrar</button>
                                </div>
                                <div className="mb-3">
                                    <button onClick={() => handleUpdate(pendiente.id)} className="btn btn-dark">Actualizar</button>
                                </div>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>
        </div>
        
    )
}