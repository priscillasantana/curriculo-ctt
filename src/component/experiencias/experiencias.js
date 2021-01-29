import React from 'react';

function Experiencia (props) {

    const { experiencia } = props.resposta

    return(
      <div className="experience">
        <h2>Experiência Profissional</h2>

        {experiencia.map(item => (

          <div className="experience-item" key={item.id}>

            <div>

              <h4>{item.cargo}</h4>

              <span>{item.periodo}</span>

              <strong>{item.empresa}</strong>

              <span>{item.local}</span>

            </div>

            <p>{item.conteudo}</p>

          </div>

        ))}

      </div>
      
    )

};


export default Experiencia;