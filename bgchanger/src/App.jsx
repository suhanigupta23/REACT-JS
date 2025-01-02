import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}  // inject variable (eg 'color') not color name or code 
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          onClick={() => setColor("red")} 
          style={{backgroundColor:"red"}}
           >Red</button>
           <button 
           onClick={() => setColor("green")} //passing function for onclick preset function of JS  , callback function
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"green"}}
           >Green</button>
           <button 
           onClick={() => setColor("blue")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"blue"}}
           >Blue</button>
           <button 
           onClick={() => setColor("purple")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"purple"}}
           >Purple</button>
         </div>
      </div>
    </div>
    // ON REFRESHING THE PAGE, THE COLOR CHANGES TO OLIVE AS THE FUNCION RESETS THE STATE. 
  )
}

export default App
