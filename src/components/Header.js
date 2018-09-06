import React from 'react'
import Nav from '../components/Nav'
import Section from '../components/Section'
import NAVLINKS from '../constants/navLinks'

const Header = (props) => {
    const { siteTitle, ...rest } = props;
    return (
        <Section
            className="header"
            { ...rest }
        >
            <h1>{siteTitle}</h1>
            <Nav links={NAVLINKS} />
        </Section>
    )
}

export default Header
