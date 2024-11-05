import React from 'react'
import { useState } from 'react'


function Project() {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirm, setConfirm] = useState()

    const [validateusername, setValidateusername] = useState(true)
    const [validateemail, setValidateemail] = useState(true)
    const [validatepassword, setValidatepassword] = useState(true)
    const [validateconfirm, setValidatconfirm] = useState(true)

    const valid = (a) => {
        const { name, value } = a.target

        if (name === 'username') {
            if (!!value.match(/^[a-z 0-9]{1,}$/)) {
                setUsername(value)
                setValidateusername(true)
            }
            else {
                setUsername(value)
                setValidateusername(false)
            }
        }
        else if (name === 'email') {
            if (!!value.match(/^[a-z 0-9]+@[a-z 0-9]+\.[a-z]{1,}$/)) {
                setEmail(value)
                setValidateemail(true)
            }
            else {
                setEmail(value)
                setValidateemail(false)
            }

        }
        else {
            if ( name==='password' && !!value.match(/^[a-z0-9]{1,}$/)) {
                setPassword(value)
                setValidatepassword(true)

            }
            else {
                setPassword(value)
                setValidatepassword(false)
            }
        }
       



    }

    const register=()=>{
        if(!username || !email || !password || !confirm ){
            alert('invalued values')
        }
        else if(password != confirm){
            alert('confirm password is not equal to password')
        }
        else{
            alert('form registerd')
        }
    }



    return (
        <div className='d-flex justify-content-center align-item-center'>
            <div className='d-flex justify-content-center align-item-center' style={{ height: '500px', width: '400px' }}>
                <form action="">

                    <h1>Form Validation</h1>


                    <div>Username: <input type="text" id='username' name='username' className=' form-control mt-2' onChange={(a) => valid(a)} />
                        {
                            !validateusername &&
                            <div>invalid value</div>
                        }

                    </div>
                    <div>Email: <input type="text" id='email' name='email' className=' form-control mt-2' onChange={(a) => valid(a)} />
                        {
                            !validateemail &&
                            <div>invalid value</div>
                        }
                    </div>
                    <div>Password: <input type="password" name="password" id="password" className='form-control mt-2' onChange={(a) => valid(a)} />
                        {
                            !validatepassword &&
                            <div>invalid value</div>
                        }
                    </div>
                    <div>Confirm Password: <input type="password" name="confirm" id="confirm" className=' form-control mt-2'onChange={(a) =>setConfirm(a.target.value)}  /></div>
                    <button className='btn btn-success mt-2' onClick={register} disabled={validateusername && validateemail && validatepassword   ? false : true}>Register</button>
                </form>
            </div>

        </div>
    )
}

export default Project
