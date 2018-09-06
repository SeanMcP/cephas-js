import React from 'react'
import Full from '../components/Full'
import Responder from '../components/Responder'

const Section = ({ backgroundColor, children, className }) => (
    <Full
        backgroundColor={backgroundColor ? backgroundColor : null}
        className={className ? className : ''}
    >
        <Responder>
            {children}
        </Responder>
    </Full>
)

export default Section