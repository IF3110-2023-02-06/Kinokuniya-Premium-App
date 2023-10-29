import { useState } from 'react';
import { signupFields } from "../common/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import Header from './AuthHeader';
import { useNavigate } from 'react-router-dom';
import { REST_BASE_URL } from '../common/constants';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function RegisterForm(){
  const [signupState,setSignupState]=useState(fieldsState);

  const navigate = useNavigate();

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build JSON data to be sent
    const requestBody = {
      name: signupState.name,
      username: signupState.username,
      email: signupState.email,
      password: signupState.password,
    };

    // Send POST request
    const response = await fetch(`${REST_BASE_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    
    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      localStorage.setItem("token", `Bearer ${data.token}`);
      navigate("/login");
    }
  };

    return(
        <div>
            <ToastContainer />
            <form className="space-y-6" onSubmit={handleSubmit}>
                <Header
                    heading="Register as Kino Author"
                    paragraph="Already have an account?"
                    linkName="Login"
                    linkUrl="/login"
                />
                <div className="">
                    {
                            fields.map(field=>
                                    <Input
                                        key={field.id}
                                        handleChange={handleChange}
                                        value={signupState[field.id]}
                                        labelText={field.labelText}
                                        labelFor={field.labelFor}
                                        id={field.id}
                                        name={field.name}
                                        type={field.type}
                                        isRequired={field.isRequired}
                                        placeholder={field.placeholder}
                                />
                            
                            )
                    }
                </div>
                <FormAction handleSubmit={handleSubmit} text="Register" />
            </form>
        </div>
    )
}