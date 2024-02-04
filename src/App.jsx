import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [buttonSize, setButtonSize] = useState({
    width: 70,
    height: 50,
    fontSize: 1,
  })
  const [isYes, setIsYes] = useState(false)

  const messages = [
    "Nem",
    "Biztos?",
    "Tényleg biztos?",
    "Szerintem gondold át!",
    "Utolsó esély!",
    "De most tényleg tényleg?",
    "Meg fogod bánni!",
    "Jó lenne hidd el",
    "Na ne csináld ;(",
    "Gondold át mégegyszer :)",
    "Meg fogsz bántani ;("
  ]

  const handleOnClick = () => {
    if(count == messages.length - 1) {
      setCount(messages.length - 1);
    } else {
      setCount(count + 1)
      setButtonSize({
        width: buttonSize.width + 20,
        height: buttonSize.height + 20,
        fontSize: buttonSize.fontSize + 0.5
      })
    }
  }

  return (
    <>
      {isYes ? 
      <>
        <img className='image-container' src='https://gifdb.com/images/high/cartoon-cat-lovers-5j3daq6eozq8yi7i.gif' />
        <h1>Oké! Juhúú!</h1>
      </>
      :
      <>
        <img className="image-continer" src='https://media.tenor.com/Ji8vLfj669IAAAAi/thinking-goma.gif'></img>
        <h1>Velem töltenéd a Valentin napot?</h1>
        <button className="button-yes" style={{width: `${buttonSize.width}px`, height: `${buttonSize.height}px`, fontSize: `${buttonSize.fontSize}em`}} onClick={setIsYes}>
            Igen
        </button>
        <button className="button-no" onClick={handleOnClick}>
            {messages[count]}
        </button>
      </>
      }
    </>
  )
}

export default App
