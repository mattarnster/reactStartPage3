import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'


class AddSiteForm extends PureComponent {
    constructor() {
      super()

      this.handleChange = this.handleChange.bind(this)
      this.validateFields = this.validateFields.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      this.state = { fields: {}, isValid: false }
    }

    componentDidMount() {
        // Find some way of getting the text field to focus correctly...
    }

    onSubmit(values) {
        const { handleSubmit } = this.props
        this.setState({ fields: {}, isValid: false })
        handleSubmit(values)
    }

    handleChange(field, e){
        const { fields } = this.state
        fields[field] = e.target.value
        this.setState({ fields })
        this.validateFields()
    }

    validateFields() {
        const { fields } = this.state
        this.setState({ isValid: fields['name']?.trim() && fields['link']?.trim() })
    }

    render() {
        return (
            <div className="row"
                 style={{
                    marginBottom: 0
                 }}>
                <form onSubmit={ this.onSubmit }>
                    <div className="input-field col s6">
                        <label htmlFor="name" className={ this.props.textColor }>Site name</label>
                        <Field onChange={this.handleChange.bind(this, 'name')} name="name" className={ 'active ' + this.props.textColor } component="input" type="text" />
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="link" className={ this.props.textColor }>Site URL</label>
                        <Field onChange={this.handleChange.bind(this, 'link')} name="link" component="input" type="text" />
                    </div>
                    <div className="input-field col s1">
                        <button type="submit" disabled={!this.state.isValid} className="waves-effect waves-light btn blue">Submit</button>
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
