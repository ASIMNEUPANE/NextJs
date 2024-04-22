'use client'
import {signIn,signOut, useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'

function Appbar() {
    const session = useSession()
  return (
    <div>
        <button onClick={()=>{
            signIn();
        }}>SIgnin</button>
        <button onClick={()=>{
            signOut();
        }}>Logout</button>
        {JSON.stringify(session)}
    </div>
  )
}

export default Appbar