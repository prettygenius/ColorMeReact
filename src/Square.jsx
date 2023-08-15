
function Square({colorValue}) {
  return(
    <section
            className="square"
            style={{backgroundColor: colorValue,}}>
    <p>{colorValue ? colorValue : 'Empty Color Value'}</p>
    </section>
  )
}

Square.defaultProps = {
  color: 'Empty Color Value'
}
export default Square