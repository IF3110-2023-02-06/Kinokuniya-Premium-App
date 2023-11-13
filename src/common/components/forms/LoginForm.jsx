import { loginFields } from "../../formFields";
import Input from "./Input";
import { useState } from "react";
import FormAction from "./FormAction";
import Header from "./AuthHeader";
import { useNavigate } from "react-router-dom";
import { REST_BASE_URL } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function LoginForm() {
    const [loginState, setLoginState]=useState(fieldsState);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Build JSON data to be sent
        const requestBody = {
            username: loginState.username,
            password: loginState.password
        };

        // Send POST request
        const response = await fetch(`${REST_BASE_URL}/user/token`, {
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
            navigate("/books");
        }
    };

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    return(
        <div>
            <ToastContainer />
            <Header
                heading="Login to Kino Premium"
                paragraph="Don't have an account yet? "
                linkName="Register"
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