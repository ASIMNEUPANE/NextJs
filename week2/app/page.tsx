import axios from "axios";
import client from '@/db'

interface Data  {
  username:string,
  password:string,
}

async function fetchData(){
  const user = await client.user.findFirst();
  return {
    username: user?.username,
    password:user?.password,
    
  }
}
async function getUserDetails<Data>() {
  // await new Promise((r)=> setTimeout(r,5000))  --delay promise
  const response = await axios.get("http://localhost:3000/api/user")
	return response.data;
}


export default async function Home() {
  const userData = await fetchData()
  return ( <div className="flex flex-col justify-center h-screen">
  <div className="flex justify-center">
      <div className="border p-8 rounded">
          <div>
              Name: {userData?.username}
          </div>
          
          {userData?.password}
      </div>
  </div>
</div>
  )
}
