import './App.css'
import Carrusel from './components/Carrusel'
import Nav from './components/Nav'
import Cards from './components/Cards'
import productos from './productosDestacados.json'
import Ofertas from './components/Ofertas'


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
    <Ofertas/>
    </>
  )
}

export default App
