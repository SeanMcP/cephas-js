import React from 'react'
import Nav from '../components/Nav'
import Section from '../components/Section'
import NAVLINKS from '../constants/navLinks'

const Header = ({ siteTitle }) => (
    <Section className="header">
        <h1>{siteTitle}</h1>
        <Nav links={NAVLINKS} />
    </Section>
)

export default Header
