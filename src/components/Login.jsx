import Navbar from './Navbar';

const Login = () => {
  return (
      <>
        <Navbar />
          
        <form className='flex items-center justify-center'>
            <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
                <div className="space-y-4 mt-6">
                
                    <div className="w-full">
                        <input type="text" placeholder="username" className="px-4 py-2 bg-gray-50" />
                    </div>
                    {/* <div className="w-full">
                        <input type="text" placeholder="email" className="px-4 py-2 bg-gray-50" />
                    </div> */}
                        
                    <div className="w-full">
                        <input type="password" placeholder="password" className="px-4 py-2 bg-gray-50" />
                    </div>
                </div>
                  
               <button className="w-full mt-5 bg-gray-600 text-white py-2 rounded-md font-semibold tracking-tight">Sign In</button>
            </div>
            
        </form>
      </>
  )
}

export default Login