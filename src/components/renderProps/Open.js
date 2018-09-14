import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Open extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.hasOwnProperty('defaultOpen') ? props.defaultOpen : false
        }
    }

    render() {
        const renderProps = {
            close: this._close,
            isOpen: this.state.isOpen,
            open: this._open,
            toggle: this._toggle
        }
        
        return this.props.children(renderProps)
    }

    _close = () => {
        this.setState({ isOpen: false })
    }

    _open = () => {
        this.setState({ isOpen: true })
    }

    _toggle = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }
}

Open.propTypes = {
    children: PropTypes.func.isRequired,
    defaultOpen: PropTypes.bool
}

export default Open