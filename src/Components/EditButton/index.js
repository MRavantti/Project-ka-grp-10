import React, { Component, Fragment } from 'react';
import EditIcon from '../../Images/edit-icon.png';
import './EditButton.css'
class EditButton extends Component {
    render() {
        const { category } = this.props

        return (
            <Fragment>
                <div className="edit-button" style={{ backgroundImage: `url(${EditIcon})` }} >
                </div>
            </Fragment>
        )
    }
}

export default EditButton;