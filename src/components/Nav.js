import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

class Nav extends PureComponent {

    getComputedColorStyle() {
        return {
            backgroundColor: this.props.color
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper" style={ this.getComputedColorStyle() }>
                    <Link to="/" className="brand-logo center">reactStartPage<sup>4</sup></Link>
                    <ul className="left hide-on-med-and-down">
                        <li><Link to="/add-remove">Manage Sites</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                        { this.props.ghAuthStatus ? <li className="gh-connected"><Link to="/settings"><img alt="It's you!" src={this.props.github.ghProfile.avatar_url} width="30" height="30"/>Connected to GitHub</Link></li> : null }
                    </ul>
                </div>

                <div className="nav-wrapper hide-on-med-and-up" style={ this.getComputedColorStyle() }>
                    <ul className="left">
                        <li><Link to="/add-remove">Add/Remove</Link></li>
                        <li><Link to="/link-github">GitHub Link</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sites: state.sites,
        color: state.color,
        github: state.github
    }
}

export default connect(mapStateToProps)(Nav)