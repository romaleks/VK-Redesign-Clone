const SubmitBtn = ({ title }) => {
  return (
    <button
      type='submit'
      className='cursor-pointer rounded-lg bg-blue-800 p-3 text-center text-white'
    >
      {title}
    </button>
  )
}

export default SubmitBtn
