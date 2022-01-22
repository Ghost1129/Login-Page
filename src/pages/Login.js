import {useState} from 'react';




function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

async function loginUser(e) {
  e.preventDefault();
  const response=await fetch('http://localhost:4000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    }),
  }) 
  const data = await response.json();
  if (data.user) {
    localStorage.setItem('token', data.user)
    alert('Login Successful');
    window.location.href = '/dashboard';
  }
  else {
    alert('Login Failed');
  }
  console.log(data);

  
}


  return (
    <div className="w-full h-full relative">
      <div className="w-1/2 h-full float-left">
        <div className='flex flex-col h-px py-32 ml-28 max-w-xs bor'>
                <h2 className='text-3xl font-bold'>Login</h2>
                
                <form onSubmit={loginUser} className=' mt-2'>
                 <div className='flex flex-col'>
                 <label className='text-sm font-serif text-gray-400'>Email:</label>
                 <input 
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e)=> setEmail(e.target.value)}
                className='mt-1 border-gray-200 border-solid border-2 shadow-lg outline-none font-light text-sm p-1 '
                />
                </div>
                <br />
                <div className='flex flex-col'>
                <label className='text-sm font-serif text-gray-400'>Password:</label>
                <input 
                type="text"
                value={password}
                placeholder="Password"
                onChange={(e)=> setPassword(e.target.value)}
                className='mt-1 border-gray-200 border-solid border-2 shadow-lg outline-none font-light text-sm p-1'
                 />
                 </div>
                 <br />
                  <input type="submit" value="Login" className="p-2 bg-purple-400 w-full rounded-md mt-4 text-white font-bold cursor-pointer"/>
              </form>
              <div 
              className='w-max text-xs ml-auto m-1 text-gray-400 cursor-pointer hover:text-gray-600'
              onClick={()=> window.location.href = '/register'}
              >Register</div>
      </div>
            </div>
            <div className=" bg-purple-400 w-1/2 h-full float-right"></div>
    </div>
  );
}

export default Login;
