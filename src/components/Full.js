import React from 'react'

const Full = ({ background, children, className }) => (
    <section
        className={`cephas full ${className ? className : ''}`}
        style={background ? { backgroundColor: background } : null}
    >
        {children}
    </section>
)

export default Full