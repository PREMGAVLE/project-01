import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{
        marginTop:'-80px',
        // width:'500px'
        height:'600px'
    }}>

        {/* <h1>page niot foundf</h1> */}
       <main style={{height:'100%'}} class="grid min-h-full  place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
           <p class=" text-9xl font-semibold ">404</p>
          <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page not found  ⚠️</h1>
          <div style={{height:'100px',display:'flex', justifyContent:'center'}}  >
          <img style={{height:'100%'}} src="https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/illustrations/characters/5.png" alt="" />

          </div>
          <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
          <div class="mt-10 flex gap-5 items-center justify-center gap-x-6">
            <Link to={'/'} class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
            <a href="#" class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFound
