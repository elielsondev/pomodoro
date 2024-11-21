function Form() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="number" className="m-4 p-2 bg-gray-300 text-gray-800 border-2 border-green-700 rounded" />
      <button className="bg-green-700 text-white p-2 rounded-full">INICIAR</button>
    </form>
  )
};

export default Form;
