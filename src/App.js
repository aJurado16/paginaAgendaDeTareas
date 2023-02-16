import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './components/navbar';
import PendList from './components/pendList';
import Formulario from './components/Formulario';



function App() {

  const [pend, setPend] = useState({
    descripcion: ''
  })

  const [pendientes, setPendientes] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getPend = () => {
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setPendientes(res))
    }
    getPend()
    setListUpdated(false)
  },[listUpdated])

  return (
    <Fragment>
      <Navbar brand="Organizador de Pendientes"/>
      <div className='container bg-secondary'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{textAlign:'center'}}>Pendientes</h2>
            <PendList pend={pend} setPend={setPend} pendientes={pendientes} setListUpdated={setListUpdated}/>
          </div>
          <div className='col-5'>
            <h2 style={{textAlign:'center'}}>Formulario</h2>
            <Formulario pend={pend} setPend={setPend}/>
          </div>

        </div>

      </div>
    </Fragment>
  );
}

export default App;
