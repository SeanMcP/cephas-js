import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <article>
        <main>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/page-2/">Go to page 2</Link>
        </main>
        <aside>
            <h2>Something else</h2>
            <p>Does this work?</p>
        </aside>
    </article>
)

export default IndexPage
