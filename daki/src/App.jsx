import './App.css'
import Carrusel from './components/Carrusel'
import Nav from './components/Nav'
import Cards from './components/Cards'
import remeraMarron from './assets/img/musculosa-top-beig.jpg'
import productos from './productos.json'


function App() {

  return (
    <>
     <Nav></Nav>
     <Carrusel/>
     {/* <Cards description={{imagen:remeraMarron,titulo:"asd",precio:"12213"}}></Cards> */}
     {productos.map(item => (
      <Cards  description={{titulo:[item.name]}}/>
     ))}
    </>
  )
}

export default App
