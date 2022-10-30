import React, {useState,setState} from 'react';
import './style.css'
import axios from "axios"
function RegistrationForm() {

     
    const [firstName, setFirstName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }

        if(id === "email"){
            setEmail(value);
        }

        if(id === "password"){
            setPassword(value);
        }
    }

    const handleApi = () => {
        console.log(firstName,email,password);
        axios.post('http://localhost:5000/register',{
            name: firstName,
            email:email,
            password:password
        }).then(result=>{
            console.log(result.data);
            alert('success');
        })
        .catch(error=>{
            console.log(error);
            alert('error');
        })
    }

    const handleSubmit  = () => {
        console.log(firstName,email,password);
    }

    return(
        <div class="form container h-100">
            <div class="form-title">
                <h2>SIGN UP NOW</h2>
            </div>
            <div class="form-body">
                <div class="username">
                    <label class="form__label" for="firstName">Username </label>
                    <input class="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div class="email">
                    <label class="form__label" for="email">Email </label>
                    <input  type="email" id="email" class="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div class="password">
                    <label class="form__label" for="password">Password </label>
                    <input class="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
            </div>

            <div class="footer">
                <button onClick={ handleApi /*()=>handleSubmit()*/} type="submit" class="btn border-dark">Register</button>
            </div>
        </div>   
    )       
}
export default RegistrationForm;