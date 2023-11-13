import React, { useState, useEffect } from 'react';
import Input from './common/components/forms/Input';
import { REST_BASE_URL } from './common/constants';
import { addBookFields } from './common/formFields';
import { BiChevronLeft } from 'react-icons/bi';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fields = addBookFields;
let fieldsState = {};
fields.forEach((field) => {
	switch (field.type) {
	  case 'date':
		fieldsState[field.id] = '';
		break;
	  case 'number':
		fieldsState[field.id] = 0;
		break;
	  default:
		fieldsState[field.id] = '';
	}
  });

const AddBook = () => {
	const [loading, setLoading] = useState(true);
	const [addBookState, setAddBookState] = useState(fieldsState);
	const [cover, setCover] = useState(null);
	const [audio, setAudio] = useState(null);

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

	const handleChange = (e) => {
		setAddBookState({ ...addBookState, [e.target.id]: e.target.value });
	};

	const handleCoverChange = (e) => {
		setCover(e.target.files[0]);
	};

	const handleAudioChange = (e) => {
		setAudio(e.target.files[0]);
	};

	const handleBack = () => {
		navigate('/books');
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Fetch the series ID from the series name
		const seriesName = addBookState.series;
		const response = await fetch(`${REST_BASE_URL}/series?seriesName=${seriesName}`, {
			headers: {
				"Authorization": localStorage.getItem("token") ?? ""
			}
		});

		const data = await response.json();
		let seriesID = undefined;

		if (data.data.length > 0) {
			seriesID = data.data[0].seriesID;
		}

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
			return;
		}

		if (seriesID === undefined) {
			// Create a new series
			const reqBody = {
				seriesName: seriesName
			};

			const resSeries = await fetch(`${REST_BASE_URL}/series`, {
				method: "POST",
				headers: {
					"Authorization": localStorage.getItem("token") ?? "",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(reqBody)
			});

			const dataSeries = await resSeries.json();

			if (!resSeries.ok) {
				toast.error(dataSeries.message, {
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
			} else {
				seriesID = dataSeries.data.seriesID;
			}
		}
		
		// Build data to be sent
		const formData = new FormData();

		formData.append("title", addBookState.title);
		formData.append("category", addBookState.category);
		formData.append("seriesID", seriesID);
		formData.append("bookDesc", addBookState.description);
		formData.append("price", addBookState.price);
		formData.append("publicationDate", addBookState.publicationDate);
		formData.append("audio", audio);
		formData.append("cover", cover);

		console.log(addBookState);

		const resPost = await fetch(`${REST_BASE_URL}/book`, {
			method: "POST",
			headers: {
				"Authorization": localStorage.getItem("token") ?? ""
			},
			body: formData
		});

		const dataPost = await resPost.json();

		if (!resPost.ok) {
			toast.error(dataPost.message, {
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
			toast.success(dataPost.message, {
				position: "top-center",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
			navigate('/books');
		}
	}

	if (loading) {
		return (
			<div className="h-full w-full flex-1 p-8 min-h-screen">
			</div>
		);
	}

	return (
		<div className="h-full w-full flex-1 p-8 min-h-screen">
			<ToastContainer />
			<button onClick={() => handleBack()}>
				<span className='flex flex-row items-center text-white'>
					<BiChevronLeft className="text-white text-3xl" />
					Back
				</span>
			</button>

			<form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    {
                        fields.map(field=>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={addBookState[field.id]}
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
								accept={field.accept}
                            />
                        )
                    }
					{/* Cover and audio file inputs */}
					<div className="flex flex-row justify-between">
						<div className="flex flex-col w-full h-full my-2 gap-2">
							<label htmlFor="cover" className="text-md text-gray-200 my-1">
								Cover
							</label>
							<input
								onChange={(e) => handleCoverChange(e)}
								id="cover"
								name="cover"
								type="file"
								required={true}
								className="rounded-md appearance-none relative block w-full px-4 py-3 bg-[#2a334e] border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-[#04d8f9] focus:border-[#04d8f9] focus:z-10 sm:text-sm"
								placeholder="Cover"
								autoComplete="off"
								accept=".svg, .png, .jpg, .jpeg"
							/>
							<label htmlFor="audio" className="text-md text-gray-200 my-2">
								Audio
							</label>
							<input
								onChange={(e) => handleAudioChange(e)}
								id="audio"
								name="audio"
								type="file"
								required={true}
								className="rounded-md appearance-none relative block w-full px-4 py-3 bg-[#2a334e] placeholder-gray-500 text-white focus:outline-none focus:ring-[#04d8f9] focus:border-[#04d8f9] focus:z-10 sm:text-sm"
								placeholder="Audio"
								autoComplete="off"
								accept=".mp3"
							/>
						</div>
						
					</div>
                </div>

				<div className='flex items-center w-full justify-end'>
					<button onSubmit={handleSubmit} className="flex items-center justify-center rounded-lg bg-[#66acff] shadow-sm text-md text-white py-3 px-5 my-5">
						Add Book
					</button>
				</div>
            </form>
		</div>
	);
};

export default AddBook;
