import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { replaceSites } from '../actions/actionCreators'

import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'

import Site from './Site'
import NoSites from './NoSites'

const SortableItem = SortableElement(({ index, value }) => {
    return value
})

const SortableList = SortableContainer(({ items }) => {
    return (
        items.map((item, index) => {
            return <SortableItem key={`${item.key}`} index={index} value={item} />
        })
    )
})

class SitesListing extends PureComponent {

    getSites() {
        return this.props.sites.map(
            (site, index) => { 
                return <Site key={ index } site={ site } color={ this.props.color } textColor={ this.props.textColor } />
            })
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.props.dispatch(replaceSites(arrayMove(this.props.sites, oldIndex, newIndex)))
    };

    render() {
        return (
            <div className="sites row"
                 style={{ 
                    marginBottom: 0
                 }}>
                <div className="col s12 m12"
                     style={{ marginTop: 30 }}>
                    { 
                        <SortableList items={ this.getSites() } axis={'xy'} onSortEnd={ this.onSortEnd } />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sites: state.sites,
        color: state.color,
        textColor: state.textColor
    }
}

export default connect(mapStateToProps)(SitesListing)