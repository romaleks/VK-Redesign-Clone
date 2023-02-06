const Input = ({ type, reference, title, required }) => {
  return (
    <div
      className='relative duration-300 after:absolute after:bottom-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-blue-500
    after:transition focus-within:after:scale-x-100'
    >
      <input
        id={title}
        type={type}
        placeholder=' '
        ref={reference}
        className='group peer block w-full border-b-2 outline-none'
        required={required}
      />
      <label
        htmlFor={title}
        className='absolute -top-6 scale-90 cursor-text text-gray-400 transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:scale-100'
      >
        {title}
      </label>
    </div>
  )
}

export default Input
