import React, { useState } from 'react'

const Button = (props) => {
    const [name] = useState(props.name)
    const [size] = useState(props.size)
    const [color] = useState(props.color)
    const [variant] = useState(props.variant)
    const [click] = useState(props.click)
    return (
        <button
            className={`btn btn-${variant} btn-${size}`}
            color={color}
            onClick={click}
        >
            {name}
        </button>
    )
}

export default Button
