import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'


class AddSiteForm extends PureComponent {

    componentDidMount() {
        // Find some way of getting the text field to focus correctly...
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <div className="row"
                 style={{
                    marginBottom: 0
                 }}>
                <form onSubmit={ handleSubmit }>
                    <div className="input-field col s6">
                        <label htmlFor="name" className={ this.props.textColor }>Site name</label> 
                        <Field name="name" className={ 'active ' + this.props.textColor } component="input" type="text" />
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="link" className={ this.props.textColor }>Site URL</label> 
                        <Field name="link" component="input" type="text" />
                    </div>
                    <div className="input-field col s1">
                        <button type="submit" className="waves-effect waves-light btn blue">Submit</button>  
                    </div>
                </form>
            </div>
        )
    }
}

AddSiteForm = reduxForm({
    form: 'AddSiteForm'
})(AddSiteForm)

export default AddSiteForm