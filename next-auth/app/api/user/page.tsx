import { getServerSession } from 'next-auth'
import React from 'react'

export default  async function page () {
    
 
     const session = await getServerSession()
  return (
    <div>page
        {JSON.stringify(session)}
    </div>
  )
}
