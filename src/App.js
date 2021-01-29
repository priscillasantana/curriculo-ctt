import React, { useState } from "react";
import './App.css';
import Foto from './component/imagem/script.js';
import Perfil from './component/Perfil/perfil.js';
import Header from './component/Header/header';
import Sidebar from './component/sidebar/sidebar';
import Experiencia from "./component/experiencias/experiencias";

function App() {

  const fakeAPI =  
    {
      nome: 'Priscilla Santana do Espirito Santo',
      ocupacao: 'Front End Developer Student | React.js | Javascript',
      resumo: '8 anos e já sei React',
      perfilProfissional: 'Faço miojo bom',
      contatos: [
        {
          id: 1,
          tipo: 'Telefone',
          contato: '(21) 99022-2459'
        },
        {
          id: 2,
          tipo: 'E-mail',
          contato: 'priscillasantana@outlook.com'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'Universidade Federal de Pelotas',
          curso: 'Relações Internacionais - Concluída'
        },
        {
          id: 2,
          instituicao: 'Campinas Tech Talents',
          curso: 'React.js Developer - Em andamento'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Introdução ao Desenvolvimento Web',
          periodo: '2020',
          empresa: 'Programaria',
          local: '',
          conteudo: 'Conceitos básicos de HTML, CSS e JavaScript'
        },
        {
          id: 2,
          cargo: 'Introdução ao Desenvolvimento Front End',
          periodo: '2020',
          empresa: 'Digital Innovation One',
          local: '',
          conteudo: 'Lógica de Programação essencial, programação para internet com JavaScript, programação para internet com HTML5 e CSS3, construindo páginas para internet com Bootstrap. '  }
      ]
  };
  
  const [resposta] = useState(fakeAPI);

  return (
    <main>
       
    <Foto />
    <Perfil />
    <Sidebar resposta={resposta} />
    <Experiencia resposta={resposta} />
    <Header resposta={resposta} />

    </main>
  );
}

export default App;










/*<p>
          -Lógica de Programação essencial, <br></br>
          -Programação para internet com JavaScript, <br></br>
          -Programação para internet com HTML5 e CSS3, <br></br>
          -Construindo páginas para internet com Bootstrap. <br></br>
          </p>
          
          
          
          
          
          <li>
              <div className="item-contato">
                <h4>E-MAIL</h4>
                <p>priscillasantana@outlook.com</p>
              </div>
            </li>
          
          
          
          
          
          */