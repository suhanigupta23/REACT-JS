//THIS IS A CARD DIV WHICH IS INCLUDED IN THE APP.JSX AS A COMPONENT OF IT. SIMPLY WE WRITE <CARD /> IN IT AS MANY TIMES WE WANT IT.

import React from 'react'

function Card({username, btnText}) {
   // console.log("props",props);
   console.log(username);
   
  return (
    <div class="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
            <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" class="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
            <div class="p-6 absolute bottom-0 left-0 right-0 z-20">
              <span class="text-sm block mb-2 text-yellow-400 font-semibold">10 FEB 2023 | BY JOHN DOE</span>
              <h3 class="text-xl font-bold text-white">A Guide to Igniting Your Imagination</h3>
              <div class="mt-4">
                <p class="text-gray-200 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold tex-white">{btnText}</button>
              </div>
            </div>
          </div>
  )
}

export default Card