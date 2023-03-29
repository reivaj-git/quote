const Button = ({heandleNewQuote}) => {
  return (
    <button
      onClick={heandleNewQuote}
      className="mt-24 bg-white hover:bg-orange text-gray-600 hover:text-white font-semibold py-2 px-4  rounded shadow"
    >
      Probar mi suerte
    </button>
  )
}

export default Button