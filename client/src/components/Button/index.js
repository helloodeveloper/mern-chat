
const Button = ({
    label = 'Button',
    type = 'button',
    className = '',
    disabled = false,

}) => {
  return (
        <button type={type} className={`mt-10 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700${className}`} disabled={disabled}>{label}</button>
  )
}

export default Button
