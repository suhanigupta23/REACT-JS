import Coffee from "./coffee"

function App() {
  const username = "Username here"

  return (
    <> 
   // <h1>Coffee React with vite | Ekasu  {username}</h1>
   //                       evaluated expression only here  , not evaluated evaluated outside the bracket
   <Coffee/>
   // <p>Test para</p>   //we can only return one element cannot directly use this as will give error.
    </> //these used to create div as not give error as not used gives error due to as returning one element as the div and within it returning as many elements we want.
  )
}

export default App
