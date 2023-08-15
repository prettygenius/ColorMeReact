import { useState } from 'react'
import InputBox from './InputBox'
import Square from './Square'
import './App.css'

export default function App() {

  const [colorValue, setColorValue] = useState()
  
  return (
    <main>
      <Square colorValue={colorValue} />
      <InputBox colorValue={colorValue} setColorValue={setColorValue}/>
    </main>
  )
}
