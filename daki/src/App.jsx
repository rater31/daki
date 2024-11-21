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
     <div className='flex justify-around'>
          <Cards 
          imagen={remeraMarron}
          titulo="Musculosa Top Beig"
          precio="$7900"></Cards>
          <Cards 
          imagen={remeraMarron}
          titulo="Musculosa Top Beig"
          precio="$7900"></Cards>
          <Cards 
          imagen={remeraMarron}
          titulo="Musculosa Top Beig"
          precio="$7900"></Cards>
     </div>
    </>
    
  )
}

export default App
