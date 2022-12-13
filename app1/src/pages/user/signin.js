import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import config from '../../config'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  // get user inputs
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // get the navigate function reference
  const navigate = useNavigate()

  const signin = () => {
    // check if user has really entered any value
    if (email.length === 0) {
      toast.error('please enter email')
    } else if (password.length === 0) {
      toast.error('please enter password')
    } else {
      // make the API call to check if user exists
      axios
        .post(config.serverURL + '/user/signin', {
          email,
          password,
        })
        .then((response) => {
          // get the data returned by server
          const result = response.data

          // check if user's authentication is successfull
          if (result['status'] === 'error') {
            toast.error('invalid email or password')
          } else {
            // localStorage
            // - built-in javascript object
            // - used to store something (key-value pairs)
            // - will NOT be cleared untill the keys get removed explicitly

            // sessionStorage
            // - built-in javascript object
            // - used to store something (key-value pairs)
            // - will be cleared automatically after the session gets killed

            // get the token from response and save it in sessionStorage
            // const token = result.data.token
            sessionStorage['token'] = result['data']['token']
            sessionStorage['username'] = result['data']['name']

            toast.success('welcome to Airbnb')
            navigate('/home')
          }
        })
        .catch((error) => {
          console.log('error')
          console.log(error)
        })
    }
  }

  return (
    <div style={{ marginTop: 100 }}>
      <div style={styles.container}>
        <div className='mb-3'>
          <label>Email</label>
          <input
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            className='form-control'
            type='email'
          />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            className='form-control'
            type='password'
          />
        </div>
        <div className='mb-3' style={{ marginTop: 40 }}>
          <div>
            Dont have an account? <Link to='/signup'>Signup here</Link>
          </div>
          <button onClick={signin} style={styles.signinButton}>
            Signin
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: 400,
    height: 300,
    padding: 20,
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    borderColor: '#db0f62',
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: 'solid',
    boxShadow: '1px 1px 20px 5px #C9C9C9',
  },
  signinButton: {
    position: 'relative',
    width: '100%',
    height: 40,
    backgroundColor: '#db0f62',
    color: 'white',
    borderRadius: 5,
    border: 'none',
    marginTop: 10,
  },
}

export default Signin
