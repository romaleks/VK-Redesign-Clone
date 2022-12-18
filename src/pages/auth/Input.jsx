const Input = ({ type, reference, title }) => {
  return (
    <div className='relative'>
      <input
        id={title}
        type={type}
        placeholder=' '
        ref={reference}
        className='peer block w-full border-b-2 outline-none'
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
