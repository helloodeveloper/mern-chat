
const Input = ({
    label = '',
    name = '',
    type = 'text',
    className = '',
    isRequired = false,
    placeholder = '',

}) => {
      return (
    <div>
       <label for={name} class="block mb-2 mt-4 text-lg text-gray-700 font-semibold">{label} :</label>
            <input type={type} id={name} className={`bg-gray-50 border border-gray-600 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`} placeholder={placeholder} required = {isRequired}></input>
    </div>
  )
}

export default Input
