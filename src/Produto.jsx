import React from 'react'

const Produto = ({dados}) => {
  const [produto, setProduto] = React.useState(null)

  React.useEffect(()=>{
    if (dados !== null){
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${dados}`)
      .then((response)=> response.json())
      .then((json)=>setProduto(json))
    }
  },[dados])

  if (produto===null) return null

  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>R$ {produto.preco}</p>
      <img src={produto.fotos[0].src}></img>
    </div>
  )
}

export default Produto
