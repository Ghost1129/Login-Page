
import {useState} from 'react';
import {useNavigate } from 'react-router-dom';




function Register() {
  const history = useNavigate();
  const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

async function registerUser(e) {
  e.preventDefault();
  const response= await fetch('http://localhost:4000/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password
    }),
  }) 
  const data = await response.json();
  if(data.status === 'ok'){
    history('/login')

  }
  console.log(data);

  
}


  return (
    <div className="w-full h-full relative">
      <div className="w-1/2 h-full float-left">
        <div className='flex flex-col h-px py-32 ml-28 max-w-xs bor'>
                <h2 className='text-3xl font-bold'>Sign up</h2>
                <h4 className='pb-3 font-serif text-sm'>Create Account To Start!</h4>
                <form onSubmit={registerUser} className=''>
                <div className='flex flex-col'>
                  <label className='text-sm font-serif'>Name:</label>
                <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e)=> setName(e.target.value)}
                className='mt-1 border-gray-200 border-solid border-2 shadow-lg outline-none font-light text-sm p-1'
                />
                </div>
                 <br />
                 <div className='flex flex-col'>
                 <label className='text-sm font-serif'>Email:</label>
                 <input 
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e)=> setEmail(e.target.value)}
                className='mt-1 border-gray-200 border-solid border-2 shadow-lg outline-none font-light text-sm p-1'
                />
                </div>
                <br />
                <div className='flex flex-col'>
                <label className='text-sm font-serif'>Password:</label>
                <input 
                type="text"
                value={password}
                placeholder="Password"
                onChange={(e)=> setPassword(e.target.value)}
                className='mt-1 border-gray-200 border-solid border-2 shadow-lg outline-none font-light text-sm p-1'
                 />
                 </div>
                 <br />
                  <input type="submit" value="Register" className="p-2 bg-purple-400 w-full rounded-md mt-4 text-white font-bold"/>
              </form>
      </div>
            </div>
            <div className=" bg-purple-400 w-1/2 h-full float-right"></div>
    </div>
  );
}

export default Register;
