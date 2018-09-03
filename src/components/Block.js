import React from 'react'
import Full from '../components/Full'
import Responder from '../components/Responder'

const Block = (props) => (
    <Full>
        <Responder>
            {props.children}
        </Responder>
    </Full>
)

export default Block