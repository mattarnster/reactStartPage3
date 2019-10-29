import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import tinycolor from 'tinycolor2'

import jszip from 'jszip'
import { saveAs } from 'file-saver'

class ExportData extends PureComponent {

    getComputedColor(withMargin) {
        var darkened = tinycolor(this.props.color)
        if (withMargin) {
            return {
                backgroundColor: darkened.darken(10),
                marginBottom: 0
            }
        }
        return {
            backgroundColor: darkened.darken(10)
        }
    }

    export() {
        console.log("export procedure")
        console.log("building zip package")
        let zip = new jszip()
        var d = new Date()
        zip.file('sites.json', JSON.stringify(this.props.sites))
        zip.file('color.txt', this.props.color)
        zip.file('textColor.txt', this.props.textColor)
        zip.file('gh_auth_tok.txt', this.props.github.ghToken)
        zip.file('gh_backup_gist_id.txt', this.props.github.ghBackupGistId)
        zip.file('gh_profile.json', JSON.stringify(this.props.github.ghProfile))
        zip.file('gh_auth_status.txt', this.props.github.ghAuthStatus ? 'true' : 'false')
        zip.generateAsync({type:"blob"})
        .then(function (blob) {
            saveAs(blob, 'reactStartPage-export-' + d.getTime()  + '.zip');
        });

    }

    render() { 
        return (  
            <div className={ 'card ' + this.props.textColor } style={ this.getComputedColor() }>
                <div className="card-content">
                    <span className="card-title">Export data</span>
                    <p>Click the button below to receive a zipped copy of the local storage data for this application.</p>
                    <br />
                    <button className="btn blue white-text" onClick={ () => this.export() }><i className="small left material-icons">file_download</i>Export data</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.color,
        textColor: state.textColor,
        github: state.github,
        sites: state.sites
    }
}

export default connect(mapStateToProps)(ExportData);