import React from 'react'

const Full = (props) => {
    const { backgroundColor, children, className } = props
    return (
        <section
            className={`cephas full ${className ? className : ''}`}
            style={{ backgroundColor }}
        >
            {children}
        </section>
    )
}

export default Full