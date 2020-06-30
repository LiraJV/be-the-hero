import React from 'react'
import produtos from '../../data/produtos.js'

export default (props) => {
    const produtosLi = produtos.map((produto) => {
        return (
            <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })

    return(
        <div>
            <table border='1' style={{width: '100%'}}>
               <tr>
                   <th>ID</th>
                   <th>Nome</th>
                   <th>Preço</th>
               </tr>
              {produtosLi}         
            </table>
        </div>
    )
}