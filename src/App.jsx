import React from 'react'
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = React.useState(null)

  React.useEffect(()=>{
    const produtoLocal = window.localStorage.getItem('dados')
    if (produtoLocal !== 'null') setDados(produtoLocal)
  }, [])

  React.useEffect(()=>{
    if (dados !== null) window.localStorage.setItem('dados', dados)
  },[dados])

  function handleClick({target}){
    setDados(target.innerText)
  }



  return (
   <div>
    <h1>Preferência: {dados} </h1>
    <button style={{margin:'10px 10px 10px 0'}} onClick={handleClick}>notebook</button>
    <button style={{margin:'10px'}} onClick={handleClick}>smartphone</button>
    <button style={{margin:'10px'}} onClick={handleClick}>tablet</button>
    <Produto dados = {dados}/>
   </div>)
};

export default App
