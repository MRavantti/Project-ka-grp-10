import React, { Component, Fragment } from 'react';
import './CoursesPageHero.css'

import CoursesHero from '../../Images/courses-hero.png'
import BackArrow from '../BackArrow';

class CoursesPageHero extends Component {
    render() {
        const { category } = this.props

        return (
            <Fragment>
                <div className="courses-page-hero" style={{ backgroundImage: `url(${CoursesHero})` }} >
					<BackArrow/>
                    <h1>Kurskatalog</h1>
                    <p>Lorem ipsum dolor sit amet dolor copysum.</p>
                </div>
            </Fragment>
        )
    }
}

export default CoursesPageHero;