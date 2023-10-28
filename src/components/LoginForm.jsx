import { loginFields } from "../common/formFields";
import Input from "./Input";
import { useState } from "react";
import FormAction from "./FormAction";
import Header from "./AuthHeader";
import { useNavigate } from "react-router-dom";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function LoginForm(){
    const [loginState,setLoginState]=useState(fieldsState);

    const navigate = useNavigate();

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(loginState);
        // TODO: Implement login logic here
        navigate('/dashboard');
    }

    return(
        <div>
            <Header
                heading="Login to Kino Premium"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/register"
            />
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="-space-y-px">
                    {
                        fields.map(field=>
                                <Input
                                    key={field.id}
                                    handleChange={handleChange}
                                    value={loginState[field.id]}
                                    labelText={field.labelText}
                                    labelFor={field.labelFor}
                                    id={field.id}
                                    name={field.name}
                                    type={field.type}
                                    isRequired={field.isRequired}
                                    placeholder={field.placeholder}
                                    autoComplete={field.autoComplete}
                            />
                        
                        )
                    }
                </div>

                <FormAction handleSubmit={handleSubmit} text="Login"/>
            </form>
        </div>
    )
}