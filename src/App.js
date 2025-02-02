import React from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TablaCalculo } from './components/TablaCalculo';
import { useEffect } from 'react'; // No olvides importar useEffect
import { ButtonGroup } from './components/ButtonGroup';
import { FormularioCalculo } from './components/FormularioCalculo';
import { calcularDatos,actualizarDatos,eliminarDatos } from './components/AccionesCalculo';


function App() {

  const [densidad_a,setDensidadA]=useState(0);
  const [densidad_m,setDensidadM]=useState(0);
  const [coeficiente,setCoeficiente]=useState(0);
  const [indice,setIndice]=useState(0);
  const [altura,setAltura]=useState(0);
  const [angulo,setAngulo]=useState(0);
  const [aceleracion,setAceleracion]=useState(0);
  const [P,setP]=useState(0);
  const [id,setId]=useState(0);
  const[calculos,setCalculos]=useState([]);
  const[editar,setEditar]=useState(false);

  
  
  const getDatos = () => {
    axios.get("http://localhost:3001/mostrar").then((respuesta) => {
      setCalculos(respuesta.data);
    })
  }


  useEffect(() => {
    getDatos();
  }, []);

  const limpiarDatos=()=>{
    setId(0);
    setDensidadA(0);
    setDensidadM(0);
    setIndice(0); 
    setCoeficiente(0);
    setAltura(0);
    setAngulo(0);
    setAceleracion(0);
    setP(0);
    setEditar(false);
  }

  const editarCalculos = (val)=>{
    console.log('Editando Datos');
    setEditar(true);

    setDensidadA(val.densidad_a);
    setDensidadM(val.densidad_m);
    setIndice(val.indice); 
    setCoeficiente(val.coeficiente);
    setAltura(val.altura);
    setAngulo(val.angulo);
    setAceleracion(val.aceleracion);
    setP(val.P);
    
}
  
  return (
    <div className="container">
      <div className="card text-center">

      <div className="card-header">
        <h1>Gestión de Cálculos</h1>
      </div>

      <div className="card-body">
      <FormularioCalculo  
        densidad_a={densidad_a} setDensidadA={setDensidadA}
        densidad_m={densidad_m} setDensidadM={setDensidadM}
        coeficiente={coeficiente} setCoeficiente={setCoeficiente}
        indice={indice} setIndice={setIndice}
        altura={altura} setAltura={setAltura}
        angulo={angulo} setAngulo={setAngulo}
        aceleracion={aceleracion} setAceleracion={setAceleracion}
        P={P} setP={setP}
      />
      </div>
     
    {/* ButtonComponets */}
    <ButtonGroup
          editar={editar}
          onCalcular={() => calcularDatos({datos:{ densidad_a, densidad_m, indice, coeficiente, altura, angulo, aceleracion, P }, getDatos, limpiarDatos})}
          onActualizar={() => actualizarDatos({id, datos: {densidad_a, densidad_m, indice, coeficiente, altura, angulo, aceleracion, P }, getDatos, limpiarDatos})}
          onLimpiar={limpiarDatos}
        />
    </div>

    {/*TableComponets */}
    <TablaCalculo 
       datos={calculos}
       onEliminar={(id) => eliminarDatos({idValue:id, getDatos, limpiarDatos})}
       onEditar= {(val) => {
         editarCalculos(val);
         setEditar(true);
         setId(val._id);
       }
      }
    /> 

</div>

  );
}

export default App;