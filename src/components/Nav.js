import React, { PureComponent } from 'react'

class Nav extends PureComponent {
    render() {
        return (
            <nav>
                <div className="nav-wrapper cyan lighten-2">
                <a href="#" className="brand-logo center">reactStartPage3</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    {/*<li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>*/}
                </ul>
                </div>
            </nav>
        )
    }
}

export default Nav