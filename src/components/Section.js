import React from 'react'
import Full from '../components/Full'
import Responder from '../components/Responder'

const Section = (props) => {
    // Required destructuring for Gatsby
    const { alignItems, children, ...rest } = props
    return (
        <Full {...rest}>
            <Responder alignItems={alignItems}>
                {children}
            </Responder>
        </Full>
    )
}
export default Section