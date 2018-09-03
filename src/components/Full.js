import React from 'react'

const Full = (props) => (
    <div className={`cephas full ${props.className ? props.className : ''}`}>
        {props.children}
    </div>
)

export default Full