import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Nav from '../components/Nav'
import Section from '../components/Section'
import '../styles/cephas-type.css'
import './cephas-layout.css'

const Layout = ({ children, data }) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Section className="header">
            <h1>{data.site.siteMetadata.title}</h1>
            <Nav
                links={[{ href: '#', text: 'nowhere' }]}
            />
        </Section>
        <Section className="content">
            {children()}
        </Section>
    </div>
)

Layout.propTypes = {
    children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
