import { useState } from "react";
import ContainerInfo from "./components/ContainerInfo";
import db from "./db/db.json";

//* ***************** Parte Logica*****************

//? ***************** Arreglo de imagenes *****************
const images = ["bg1", "bg2", "bg3", "bg4"];

function App() {

  const getRandomItem = (listItems) => {
    const randonIndex = Math.floor(Math.random() * listItems.length)
    return listItems[randonIndex];
  }
//* ***************** Apartado de useState *****************
  const [quote, setQuote] = useState(getRandomItem(db));

  const [bgImage, setBgImage] = useState(getRandomItem(images));


  const heandleNewQuote = () => {
    setQuote(getRandomItem(db))
    setBgImage(getRandomItem(images));

  }

//* ***************** Parte Visual*****************


  return (

     <div style={{ backgroundImage: `url(/images/${bgImage}.png)` }} className="App bg-cover bg-center h-screen flex items-center justify-center">

       <ContainerInfo quote={quote} heandleNewQuote={heandleNewQuote} />
      
     </div>

  )
}

export default App
