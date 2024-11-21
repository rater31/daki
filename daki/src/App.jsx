import './App.css'
import Carrusel from './components/Carrusel'
import Nav from './components/Nav'
import Cards from './components/Cards'
import remeraMarron from './assets/img/musculosa-top-beig.jpg'

function App() {

  return (
    <>
     <Nav></Nav>
     <Carrusel/>
     <Cards description={{imagen:g,titulo:"hola",precio:""}}></Cards>
    </>
  )
}

export default App
