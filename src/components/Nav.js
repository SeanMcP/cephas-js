import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const Nav = (props) => (
    <nav className={`cephas nav ${props.className ? props.className : ''}`}>
        {props.links.map(
            (link, i) => (
                <Link
                    key={i}
                    to={link.href}
                >
                    {link.text}
                </Link>
            )
        )}
    </nav>
)

Nav.propTypes = {
    className: PropTypes.string,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default Nav