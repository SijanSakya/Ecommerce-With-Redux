import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='container mx-auto px-20 flex flex-col justify-center items-center gap-2 h-screen w-screen '>
      <h2>Not Found</h2>
      <p>Could not find requested page</p>
      <Link href="/" className='bg-blue-500 px-4 py-2 text-white rounded-md'>Return Home</Link>
    </div>
  )
}


