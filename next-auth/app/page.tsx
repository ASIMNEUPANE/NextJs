import Image from "next/image";
import Appbar from "@/components/Appbar";
export default  async function Home() {
//   const res = await fetch('https://sum-server.100xdevs.com/todos', {
//     next: { revalidate: 10 }
// }); static
  return (
   <div>
    <Appbar/>
   </div>
  );
}
