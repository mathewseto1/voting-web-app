function Input(className, Placeholder, value, setValue) {
    return <input placeholder = {Placeholder} className = {className} type = "text" value = {value} onChange = {(e) => setValue(e.target.value)}/>;

}

export default Input;