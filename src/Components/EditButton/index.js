import React, { Component, Fragment } from 'react';
import './EditButton.css'

class EditButton extends Component {
    render() {
        const { category } = this.props

        return (
            <Fragment>
                <div className="edit-button" style={{ backgroundImage: `url(/assets/svgs/edit-icon.svg)` }} >
                </div>
            </Fragment>
        )
    }
}

export default EditButton;