import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'


class AddRemoveForm extends PureComponent {

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
                        <label htmlFor="site_name">Site name</label> 
                        <Field name="site_name" className="active" component="input" type="text" />
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="site_url">Site URL</label> 
                        <Field name="site_url" component="input" type="text" />
                    </div>
                    <div className="input-field col s1">
                        <button type="submit" className="waves-effect waves-light btn blue">Submit</button>  
                    </div>
                </form>
            </div>
        )
    }
}

AddRemoveForm = reduxForm({
    form: 'AddRemoveForm'
})(AddRemoveForm)

export default AddRemoveForm