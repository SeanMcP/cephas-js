import React from 'react'

const Full = ({ backgroundColor, children, className }) => (
    <section
        className={`cephas full ${className ? className : ''}`}
        style={backgroundColor ? { backgroundColor } : null}
    >
        {children}
    </section>
)

export default Full