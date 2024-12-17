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
    <div className='flex justify-around'>
     {productos.map(item => (
      <Cards titulo={item.name} imagen={item.imagen} precio={item.price}/>
     ))}
    </div>
    </>
  )
}

export default App
