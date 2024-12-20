import './App.css'
import Carrusel from './components/Carrusel'
import Nav from './components/Nav'
import Cards from './components/Cards'
import productosDestacados from './productosDestacados.json'
import Ofertas from './components/Ofertas'
import Productos from './components/Productos'
import productos from './productos.json'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
     <Nav></Nav>
     <Carrusel/>
    <div className='flex justify-around'>
     {productosDestacados.map(item => (
      <Cards titulo={item.name} imagen={item.imagen} precio={item.price}/>
     ))}
    </div>
    <Ofertas/>
    <div className='flex justify-around gap-4 flex-wrap mx-5 my-5'>

      {productos.map(items =>(
          
          <Cards  titulo={items.name} imagen={items.imagen} precio={items.price}/>
      ))}
    </div>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
