
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const history = useNavigate()
    const [quote, setQuote] = useState('')
    const [tempQuote, setTempQuote] = useState('')


    async function populateQuote () {
        const req =await fetch('http://localhost:4000/api/quote', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})
        const data = await req.json()
        if(data.status === 'ok'){
            setQuote(data.quote)
        }
    }
    async function updateQuote(e) {
		e.preventDefault()

		const req = await fetch('http://localhost:4000/api/quote', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify({
				quote: tempQuote,
			}),
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(tempQuote)
			setTempQuote('')
		} else {
			alert(data.error)
		}
	}

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt_decode(token)
            if(!user){
                localStorage.removeItem('token')
                history('/login')
            }
            else{
                populateQuote()
            }
        }
    })


    return (
        <>
        <div>
            <h1>Your Quote: {quote||'No Quote Found'}</h1>
        </div>
        <form onSubmit={updateQuote}>
				<input
					type="text"
					placeholder="Quote"
					value={tempQuote}
					onChange={(e) => setTempQuote(e.target.value)}
				/>
				<input type="submit" value="Update quote" />
			</form>
        </>
    )
}

export default Dashboard
