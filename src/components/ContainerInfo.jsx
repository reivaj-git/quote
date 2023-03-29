import Button from "./Button"


function ContainerInfo({ quote, heandleNewQuote }) { 
  return (
    <section className="grid grid-cols-1 justify-items-center">
      
      <h1 className=" mt-8 uppercase text-white text-center font-bold font text-4xl drop-shadow-[0_5px_1px_rgba(255,166,69,0.90)] ">Galletas de la Fortuna</h1>
      
      <Button heandleNewQuote={heandleNewQuote}/>
          
      <article className="mt-16">
        <div className="mx-auto bg-white rounded-md shadow-md max-w-xl h-44 flex items-center">
          <div className="px-6 py-4">
            <p className="text-2xl text-gray-600">{quote.phrase}</p>
          </div>
        </div>
      </article>

      <article className="mt-60">
        <div className="mx-auto bg-white bg-opacity-80 rounded-md shadow-md max-w-xl">
          <div className="px-6 py-4">
            <p className="text-gray-600">{quote.author}</p>
          </div>
        </div>
      </article>

    </section>
  )
}

export default ContainerInfo