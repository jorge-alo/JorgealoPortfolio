

export const Datos = ({ name, placeholder, inputRef }) => {

    return (
        <div className="form__datos">
            <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
            <input
                type="text"
                id={name}
                placeholder={placeholder}
                name={name}
                ref={inputRef} />
                
        </div>
    )
}
