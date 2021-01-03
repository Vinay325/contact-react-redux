import React, { useState } from "react";

const TextInput = (props) => {
    const [inputType] = useState(props.type)
    const [placeHolder] = useState(props.placeholder)
    const [onChange] = useState(props.onChange)
    const [value] = useState(props.value)

    const handleChange = (e) =>{
        
    }

    return (
        <>
            <input
                type={inputType}
                value={value}
                className="form-control"
                onChange={(e)=>handleChange(e)}
                placeholder={placeHolder}
            />
        </>
    );
}
export default TextInput;