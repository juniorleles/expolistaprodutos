import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png'
import batata from '../../assets/frutas/Batata.png'
import brocolis from '../../assets/frutas/Brócolis.png'
import pepino from '../../assets/frutas/Pepino.png'
import abobora from '../../assets/frutas/Abóbora.png'

const cesta = {
  topo : {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 30,00",
    botao: "Comprar",
  },
  itens: { 
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
    ]

  }
}

export default cesta;