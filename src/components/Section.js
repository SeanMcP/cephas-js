import React from 'react'
import Full from '../components/Full'
import Responder from '../components/Responder'

const Section = ({ background, children, className }) => (
    <Full
        background={background ? background : null}
        className={className ? className : ''}
    >
        <Responder>
            {children}
        </Responder>
    </Full>
)

export default Section