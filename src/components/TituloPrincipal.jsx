import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function TituloPrincipal(props) {
    const [titulo, setTitulo] = useState(props.titulo ?? "Olá, mundo!");

    useEffect(()=>{console.log('Titulo mudou')},[titulo]);

    function clickCallBack(event){
        alert('Clique efetuado');
    }

    function handleInputChange(event){
        setTitulo(event.target.value);
    }
    

    return <>
    <h1 onClick={clickCallBack}>{titulo}</h1>
    <input type="text" onChange={handleInputChange} />
    </>;

}





//Indica a exportação padrão do arquivo
export default TituloPrincipal;