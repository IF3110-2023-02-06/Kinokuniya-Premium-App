import { useState } from 'react';
import { signupFields } from "../../formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import Header from './AuthHeader';
import { useNavigate } from 'react-router-dom';
import { REST_BASE_URL } from '../../constants';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { validateEmail, validateUsername } from '../../validations';

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function RegisterForm(){
  const [signupState,setSignupState]=useState(fieldsState);

  const navigate = useNavigate();

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const passwordMatch = signupState.password === signupState["confirm-password"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordMatch) {
      toast.error("Passwords do not match", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return;
    }

    if (!validateUsername(signupState.username)) {
      toast.error("Username can only contain alphanumeric characters and underscores", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return;
    }

    if (!validateEmail(signupState.email)) {
      toast.error("Invalid email address", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return;
    }

    // Build JSON data to be sent
    const requestBody = {
      name: signupState.name,
      username: signupState.username,
      email: signupState.email,
      password: signupState.password
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
        theme: "dark",
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