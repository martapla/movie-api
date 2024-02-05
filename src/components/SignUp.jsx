import Navbar from './Navbar';

const SignUp = () => {
  return (
    <>
        <Navbar />
          
        <form className='flex items-center justify-center'>
            <div className="bg-gray-900 border border-2 border-gray-300 py-6 rounded-md px-4 md:px-10 shadow-md">
                <div className="space-y-4 md:mt-6">
                      
                    <div className="w-full">
                        <input type="text" placeholder="email" className="px-4 py-2 bg-gray-200 rounded-md" />
                    </div> 
                
                    <div className="w-full">
                        <input type="text" placeholder="username" className="px-4 py-2 bg-gray-200 rounded-md" />
                    </div>
                        
                    <div className="w-full">
                        <input type="password" placeholder="password" className="px-4 py-2 bg-gray-200 rounded-md" />
                    </div>
                </div>
                  
               <button className="w-full mt-5 bg-gray-900 text-zinc-400 py-2 border border-2 border-zinc-400 rounded-md hover:text-yellow-500 hover:border-yellow-500 cursor-pointer">Sign Up</button>
            </div>
            
        </form>
      </>
  )
}

export default SignUp