import "./style/components/app.sass"

import Form from "./components/Form"

import mobileBgImage from "./images/pattern-bg-mobile.png"
import iconArrow from "./images/icon-arrow.svg"

function App() {
  return (
    <div className="App">
      <img className="background" src={mobileBgImage} alt="Background image" />
      <Form iconArrow={iconArrow}/>
    </div>
  )
}

export default App
