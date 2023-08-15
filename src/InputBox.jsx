
function InputBox({colorValue, setColorValue}) {
  return(
    <form onSubmit={(e)=> e.preventDefault()}>
      <label>Add Color Name:</label>
      <input autoFocus type='text' 
        placeholder='type color here' 
        value={colorValue}
        required
        onChange={(e)=> setColorValue(e.target.value) }/>
    </form>
  )
}

export default InputBox