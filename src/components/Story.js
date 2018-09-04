import React from 'react'
import Full from '../components/Full'
import Responder from '../components/Responder'

const Story = (props) => (
    <Full className={props.className ? props.className : ''}>
        <Responder>
            {props.children}
        </Responder>
    </Full>
)

export default Story