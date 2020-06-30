import './App.css';
import React from 'react';

import ListaProdutos from './components/repeticao/ListaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default () => ( 
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#7 - Repetição" color="#FF4C65">
                <ListaProdutos /> 
            </Card>
            <Card titulo="#6 - Repetição" color="#FF4C65">
                <ListaAlunos /> 
            </Card>
            <Card titulo="#5 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Maria" />
                    <FamiliaMembro nome="João" />
                    <FamiliaMembro nome="Ana" />
                </Familia>
            </Card>
            <Card titulo="#4 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#3- Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#2 - Com Parâmetro" color="#E8B71A">
                <ComParametro titulo="Situação do Aluno" aluno="João" nota={5.3} />
            </Card>
            <Card titulo="#1 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);