import React, { Component, Fragment } from 'react';
import './CoursesPageHero.css'
import BackButton from '../BackButton';

import CoursesHero from '../../Images/courses-hero.png'
import BackButtonImage from '../../Images/back-button.svg'

class CoursesPageHero extends Component {
    render() {
        const { category } = this.props

        return (
            <Fragment>
                <div className="courses-page-hero" style={{ backgroundImage: `url(${CoursesHero})` }} >
                    <BackButton link={"/"} img={BackButtonImage} />
                    <h1>Kurskatalog</h1>
                    <p>Lorem ipsum dolor sit amet dolor copysum.</p>
                </div>
            </Fragment>
        )
    }
}

export default CoursesPageHero;