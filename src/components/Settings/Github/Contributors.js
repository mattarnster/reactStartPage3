
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './contributors.css';
import Spinner from '../../Spinner'

import {
  getGhContributors,
} from '../../../actions/actionCreators'

class Contributors extends PureComponent {

  componentDidMount() {
    const getData = async () => {
      await this.props.dispatch(getGhContributors())
    }

    getData();
  }

  render() {
    if (this.props.github.contributors) {

      const contributors = JSON.parse(this.props.github.contributors);

      const contributorsList = contributors?.filter(item => item.type && item.type === "User").map(contributor =>
        <li className="item-contributor" key={contributor.id}>
          <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
            <img src={contributor.avatar_url} alt={contributor.login} />
          </a>
        </li>);

      return (
        <div className="card-content">
          <p>Contributors</p>
          <ul className="list-contributors">
            {contributorsList ? contributorsList : <Spinner />}
          </ul>
        </div>

      )
    } else {
      return <p>Loading...</p>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    github: state.github
  }
}

export default connect(mapStateToProps)(Contributors)
