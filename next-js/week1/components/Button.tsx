"use client"
export const Button=()=>{
    const buttonHandler= ()=>{
        console.log('btn click')
            }
    return  <button onClick={buttonHandler}
    type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
}

// to make seo frindly we have to seprate the client components used item 