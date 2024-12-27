import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { jsx as _jsx} from "react/jsx-runtime.js"

function MyApp(){
  return (
    <div>
      <h1>Custom App! Coffee</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://googlconsole.log('Rendering the MyApp component');
console.log('Rendering the anotherElement component');
console.log('Rendering the anotherElement component');
console.log('Rendering the MyApp component');
console.log('Rendering the anotherElement component');
console.log('Rendering the reactElement component');
//       target:'_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a href = "https://google.com" target = '_blank'>Visit google</a>
)

const anotherUser = "coffee aur react"

const reactElement = React.createElement(         //babel injects this createElement
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).
render(
  // <MyApp />   //OR   MyApp()    can be written as function but optimized is <MyApp />
  // anotherElement  
  reactElement
)
