import React from 'react';

const FormAction = ({
    handleSubmit,
    type='Button',
    action='submit',
    text
}) => {
    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#912C3C] hover:bg-[#70222f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#70222f] mt-10 border-none"
                onSubmit={handleSubmit}
            >

                {text}
            </button>
            :
            <></>
        }
        </>
    )
}

export default FormAction;