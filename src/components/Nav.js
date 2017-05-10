import React, { PureComponent } from 'react'

import { Link } from 'react-router-dom'

class Nav extends PureComponent {
    render() {
        return (
            <nav>
                <div className="nav-wrapper cyan lighten-2">
                <Link to="/" className="brand-logo center">reactStartPage<sup>3</sup></Link>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    {/*<li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>*/}
                    <li><Link to="/link-github">Configure Github</Link></li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Nav