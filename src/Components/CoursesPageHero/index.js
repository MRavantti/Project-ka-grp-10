import React, { Component, Fragment } from 'react';
import './CoursesPageHero.css'

import BackArrow from '../BackArrow';

class CoursesPageHero extends Component {
    render() {
        const { category } = this.props
        console.log(this.props);
        return (
            <Fragment>
                <div className="courses-page-hero">
					<BackArrow transparent={true} goBack={this.props.goBack}/>
                    <h1>Kurskatalog</h1>
                    <p>Lorem ipsum dolor sit amet dolor copysum.</p>
                </div>
            </Fragment>
        )
    }
}

export default CoursesPageHero;