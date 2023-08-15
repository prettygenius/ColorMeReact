
function InputBox({colorValue, setColorValue}) {
  return(
    <form onSubmit={(e)=> e.preventDefault()}>
      <label>Add Color Here:</label>
      <input autoFocus type='text' 
        placeholder='enter color here' 
        value={colorValue}
        required
        onChange={(e)=> setColorValue(e.target.value) }/>
    </form>
  )
}

export default InputBox