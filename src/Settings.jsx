import React from "react";
import Input from "./common/components/forms/Input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { REST_BASE_URL } from "./common/constants";
import { signupFields } from "./common/formFields";
import { validateEmail, validateUsername } from "./common/validations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => {
    fieldsState[field.id] = '';
});

const Settings = () => {
    const [loading, setLoading] = useState(true);
    const [settingsState, setSettingsState] = useState(fieldsState);

    const navigate = useNavigate();

    const checkAuth = async () => {
		const response = await fetch(`${REST_BASE_URL}/user/check`,
		{
		  headers: {
			"Authorization": localStorage.getItem("token") ?? ""
		  }
		});

		
		if (!response.ok) {
			navigate('/login');
		}

        setLoading(false);
	};

    useEffect(() => {
		checkAuth();
	}, []);

    useEffect(() => {
        if (window.location.pathname === '/') {
            navigate('/books');
        }
    });

    useEffect(() => {
        // Fetch current user data
        const fetchUserData = async () => {
            setLoading(true);
            const response = await fetch(REST_BASE_URL + "/user", {
                headers: {
                    "Authorization": localStorage.getItem("token") ?? ""
                }
            });

            if (!response.ok) {
                const data = await response.json();
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
                return;
            }

            const data = await response.json();
            const user = data.data;

            setSettingsState({
                ...settingsState,
                name: user.name,
                username: user.username,
                email: user.email
            });

            setLoading(false);
        };

        fetchUserData();
    }, []);

    const handleChange=(e)=>setSettingsState({...settingsState,[e.target.id]:e.target.value});

    const passwordMatch = settingsState.password === settingsState["confirm-password"];

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

        if (!validateUsername(settingsState.username)) {
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

        if (!validateEmail(settingsState.email)) {
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

        const response = await fetch(REST_BASE_URL + "/user", {
            method: "PUT",
            headers: {
                "Authorization": localStorage.getItem("token") ?? "",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: settingsState.name,
                username: settingsState.username,
                email: settingsState.email,
                password: settingsState.password
            })
        });

        if (!response.ok) {
            const data = await response.json();
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
            return;
        }

        toast.success("Settings updated successfully!", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const clearForm = (e) => {
        e.preventDefault();

        setSettingsState(fieldsState);
    }

    if (loading) {
        return <div className="h-full w-full flex-1 p-8 min-h-screen"></div>
    }

    return (
        <div className="h-full w-full flex-1 p-8 min-h-screen">
                <ToastContainer />

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        {
                            fields.map(field=>
                                <Input
                                    key={field.id}
                                    handleChange={handleChange}
                                    value={settingsState[field.id]}
                                    labelText={field.labelText}
                                    labelFor={field.labelFor}
                                    id={field.id}
                                    name={field.name}
                                    type={field.type}
                                    isRequired={field.isRequired}
                                    placeholder={field.placeholder}
                                    autoComplete={field.autoComplete}
                                    customClass={"flex w-full h-full px-4 py-3 text-gray-200 rounded-tl-md rounded-bl-md bg-[#2a334e] drop-shadow-xl focus:outline-none placeholder:text-gray-300 text-md border-none text-white"}
                                    labelClass={"text-md text-gray-200 my-2"}
                                />
                            )
                        }
                    </div>

                    <div className='flex items-center w-full justify-end'>
                        <button onSubmit={handleSubmit} className="flex items-center justify-center rounded-lg bg-[#66acff] shadow-sm text-md text-white py-3 px-5 my-5">
                            Save Changes
                        </button>
                        <button onClick={clearForm} className="flex items-center justify-center rounded-lg shadow-sm text-md text-white py-3 px-5 my-5 mx-5 border hover:border-red-500 hover:text-red-500">
                            Clear Form
                        </button>
                    </div>
                </form>
        </div>
    );
}

export default Settings;
