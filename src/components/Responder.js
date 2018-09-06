import React from 'react'

const Responder = (props) => {
    const { alignItems, children, className } = props
    return (
        <div
            className={`cephas responder ${className ? className : ''}`}
            style={{ alignItems }}
        >
            {children}
        </div>
    )
}

export default Responder