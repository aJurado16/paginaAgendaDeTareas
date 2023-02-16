import React from "react";

export default function Formulario ({pend, setPend}) {
    const handleChange = (evt) => {
        setPend({
            ...pend,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = () => {

        //validacion de los datos descripcion no puede ser null
        if(pend.descripcion === "") {
            alert("No escribiste nada, por favor escribe un pendiente.")
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pend)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //Reinicio del state
        setPend({descripcion: ''})

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="pendiente" className="form-label">Pendiente</label>
                <input placeholder="Ingresa el nuevo pendiente" name='descripcion' onChange={handleChange} type="text" id="pendiente" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Añadir</button>
        </form>
    )
}