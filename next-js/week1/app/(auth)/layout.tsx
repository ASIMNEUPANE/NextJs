

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
   <div className="p-4 border-b text-center">20% off for referal</div>
        {children}
  </div>

     

 
  
}
