import { useState } from "react";
import UseStateExample from "./pages/UseStateExample";
import UseReducerExample from "./pages/UseReducerExample";
import UseReducerForm from "./pages/UseReducerForm";


function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      {/* <UseStateExample counter={counter} setCounter={setCounter}></UseStateExample> */}
      {/* <UseReducerExample></UseReducerExample> */}
      <UseReducerForm></UseReducerForm>
    </div>
  )
}

export default App
