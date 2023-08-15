
function Square({colorValue}) {
  return(
    <section
            className="square"
            style={{backgroundColor: colorValue,}}>
    <p>{colorValue ? colorValue : 'Empty Color Value'}</p>
    </section>
  )
}

Sqaure.defaultProps = {
  color: 'Empty Color Value'
}
export default Square