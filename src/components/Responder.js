import React from 'react'

const Responder = (props) => (
    <div className={`cephas responder ${props.className ? props.className : ''}`}>
        {props.children}
    </div>
)

export default Responder