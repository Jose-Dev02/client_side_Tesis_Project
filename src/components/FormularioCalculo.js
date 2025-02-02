import React from 'react';
import {InputsGroups} from './InputsGrups';

export const FormularioCalculo =(
    {
        densidad_a, setDensidadA,
        densidad_m,setDensidadM,
        coeficiente, setCoeficiente,
        indice, setIndice,
        altura, setAltura,
        angulo,setAngulo,
        aceleracion, setAceleracion,
        P, setP

    })=>{
    
    return(
        <>
        <InputsGroups label="Densidad de Arena" value={densidad_a} 
        type="number" onChange={(e) => setDensidadA(e.target.value)}
        placeholder="Ingrese el valor de la Densidad de Arena" />

        <InputsGroups label="Densidad de Arena" value={densidad_m} 
        type="number"onChange={(e) => setDensidadM(e.target.value)}
        placeholder="Ingrese el valor de la Densidad del Mar" /> 

        <InputsGroups label="Coeficiente de Porocidad" value={coeficiente} 
        type="number" onChange={(e) => setCoeficiente(e.target.value)}
        placeholder="Ingrese el valor del Coeficiente de Porocidad" /> 

        <InputsGroups label="Indice de Rompiente" value={indice} 
        type="number" onChange={(e) => setIndice(e.target.value)}
        placeholder="Ingrese el valor del Indice de Rompiente" /> 

        <InputsGroups label="Altura" value={altura} 
        type="number" onChange={(e) => setAltura(e.target.value)}
        placeholder="Ingrese el valor de la Altura" /> 

        <InputsGroups label="Angulo" value={angulo} 
        type="number" onChange={(e) => setAngulo(e.target.value)}
        placeholder="Ingrese el valor del Angulo" /> 

        <InputsGroups label="Aceleracion de la Gravedad" value={aceleracion} 
        type="number" onChange={(e) => setAceleracion(e.target.value)}
        placeholder="Ingrese el valor de la aceleracion de la Gravedad" /> 

        <InputsGroups label="P" value={P} 
        type="number" onChange={(e) => setP(e.target.value)}
        placeholder="Ingrese el valor de P" /> 

        </>
    )
    
} 

