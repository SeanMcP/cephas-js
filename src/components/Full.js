import React from 'react'

const Full = (props) => (
    <section className={`cephas full ${props.className ? props.className : ''}`}>
        {props.children}
    </section>
)

export default Full