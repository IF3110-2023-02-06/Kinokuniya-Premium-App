import { useState } from 'react';
import { signupFields } from "../common/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import Header from './AuthHeader';
import { useNavigate } from 'react-router-dom';

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function RegisterForm(){
  const [signupState,setSignupState]=useState(fieldsState);

  const navigate = useNavigate();

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    // TODO: Implement signup logic here

    navigate('/login');
  }

    return(
        <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <Header
                    heading="Register as Kino Author"
                    paragraph="Already have and account? "
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