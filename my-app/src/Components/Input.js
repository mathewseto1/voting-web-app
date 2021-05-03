function Input({className, placeholder, value, setValue}) {
    return <input placeholder = {placeholder} className = {className} type = "text" value = {value} onChange = {(e) => setValue(e.target.value)}/>;

}

export default Input;