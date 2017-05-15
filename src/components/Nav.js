import React, { PureComponent } from 'react'

import { Link } from 'react-router-dom'

class Nav extends PureComponent {
    render() {
        return (
            <nav>
                <div className="nav-wrapper cyan lighten-2">
                    <Link to="/" className="brand-logo center">reactStartPage<sup>3</sup></Link>
                    <ul className="left hide-on-med-and-down">
                        {/*<li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>*/}
                        <li><Link to="/add-remove">Add/Remove</Link></li>
                        <li><Link to="/link-github">Github Settings</Link></li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                        { /*this.props.ghAuthStatus ? <li><Link to="/link-github">Test</Link></li> : null*/ }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav