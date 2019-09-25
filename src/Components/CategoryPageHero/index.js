import React, { Component, Fragment } from 'react';
import './CategoryPageHero.css'
import BackArrow from '../BackArrow';
import MediaButtons from '../MediaCategoryButtons';

import DanceHero from '../../Images/dance-hero.png'
import MovieHero from '../../Images/movie-hero.png'
import MusicHero from '../../Images/music-hero.png'
import TheatreHero from '../../Images/theatre-hero.png'
import BackButtonImage from '../../Images/back-button.png'

class CategoryPageHero extends Component {
    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    Category(category) {
        if (category === "dans") {
            return (
                "ex “Från koreografi till samtal om salsa - här finner du allt material kopplat till dans”"
            );
        }
        else if (category === "film") {
            return ("film beskrivning")
        }
        else if (category === "musik") {
            return ("musik beskrivning")
        }
        else {
            return ("teater beskrivning")
        }
    }

    render() {
		const { category } = this.props
		
        return (
            <Fragment>
                {
                    category === "dans"
                        ? <div className="category-page-hero" style={{ backgroundImage: `url(${DanceHero})` }} >
                            <BackArrow transparent={true} goBack={this.props.goBack} />
                            <h1>{this.Capitalize(category)}</h1>
                            <p>{this.Category(category)}</p>
                        </div>
                        : category === "film"
                            ? <div className="category-page-hero" style={{ backgroundImage: `url(${MovieHero})` }} >
                                <BackArrow transparent={true} goBack={this.props.goBack} />
                                <h1>{this.Capitalize(category)}</h1>
                                <p>{this.Category(category)}</p>
                            </div>
                            : category === "musik"
                                ? <div className="category-page-hero" style={{ backgroundImage: `url(${MusicHero})` }} >
                                    <BackArrow transparent={true} goBack={this.props.goBack} />
                                    <h1>{this.Capitalize(category)}</h1>
                                    <p>{this.Category(category)}</p>
                                </div>
                                : category === "teater"
                                    ? <div className="category-page-hero" style={{ backgroundImage: `url(${TheatreHero})` }} >
                                        <BackArrow transparent={true} goBack={this.props.goBack} />
                                        <h1>{this.Capitalize(category)}</h1>
                                        <p>{this.Category(category)}</p>
                                    </div>
                                    : null
                }
                <MediaButtons />
            </Fragment>
        )
    }
}

export default CategoryPageHero;