import React, { useState } from 'react';

function Sidebar (props) {

  const { contatos } = props.resposta
  const { educacao } = props.resposta
  const [dados, mostraDados] = useState(false)
  const botao = () => {
      mostraDados(!dados)
  };
console.log(contatos)
    return(
        <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <button id="button" onClick={botao}>Exibir Contatos</button>

          {dados && 
              contatos.map (item => (
                <div className="lista-de-contatos" key={item.id}>
                  <li>
                    <div className="item-contato">
                      <h4>{item.tipo}</h4>
                      <p>{item.contato}</p>
                    </div>
                  </li>
                </div>
                ))
            }
        </div>

        <div className="sidebar">
          <h3>Educação</h3>
         {educacao.map (item => (
          <div className="lista-de-formacao"key={item.id}>
            <li>
              <h4>{item.instituicao}</h4>
              <p>{item.curso}</p>
            </li>
          </div>
         ))}
        </div>
      </aside>
    )
};


export default Sidebar