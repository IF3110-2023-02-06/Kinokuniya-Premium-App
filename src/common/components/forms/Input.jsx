const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#04d8f9] focus:border-[#04d8f9] focus:z-10 sm:text-sm"

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    autoComplete="off",
    customClass,
    labelClass,
    accept
}){
    return(
        <div className="flex flex-col mb-5">
            <label htmlFor={labelFor} className={labelClass ? labelClass : "sr-only"}>
              {labelText}
            </label>
            <input
              onChange={handleChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className={fixedInputClass+customClass}
              placeholder={placeholder}
              autoComplete={autoComplete}
              accept={accept ? accept : ""}
            />
        </div>
    )
}