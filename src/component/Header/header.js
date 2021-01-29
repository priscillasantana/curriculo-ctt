import React from 'react';



function Header(props) {

    const { nome, ocupacao } = props.resposta;

    return(
        <>
            <div className="biografia">

                <h1>

                {nome}

                </h1>
                
                <div className="ocupacao">

                {ocupacao}  

                </div>
            
            </div>

            <div className="titulo">

                Perfil <br /> Profissional

            </div>
      </>
    )

};

export default Header