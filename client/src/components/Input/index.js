
const Input = ({
    label = '',
    name = '',
    type = '',
    className = '',
    inputClassName = '',
    isRequired = false,
    placeholder = '',
    value = '',
    onChange = () => {}

}) => {
      return (
    <div className={className}>
       <label htmlFor={name} className="block mb-2 mt-4 text-lg text-gray-700 font-semibold">{label}</label>
            <input 
              type={type} 
              id={name} 
              className={`bg-gray-50 border border-gray-600 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${inputClassName}`} 
              placeholder={placeholder} 
              required = {isRequired} 
              value={value} 
              onChange={onChange}></input>
    </div>
  )
}

export default Input
