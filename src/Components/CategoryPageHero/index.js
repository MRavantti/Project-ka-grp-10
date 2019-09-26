import React, { Component, Fragment } from 'react';
import './CategoryPageHero.css'
import BackArrow from '../BackArrow';
import MediaButtons from '../MediaCategoryButtons';

class CategoryPageHero extends Component {
    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    Category(category) {
        if (category === "dans") {
            return ("Från koreografi till samtal om salsa - här finner du allt material kopplat till dans");
        }
        else if (category === "film") {
            return ("Här finner du allt material kopplat till film")
        }
        else if (category === "musik") {
            return ("HÄr finner du allt material kopplat till musik")
        }
        else {
			return ("HÄr finner du allt material kopplat till teater")
        }
    }

    
    render() {
		const { category } = this.props
		
        return (
            <Fragment>
                {
                    category === "dans"
                        ? <div className="category-page-hero" style={{ backgroundImage: "url(/assets/images/dance.jpg)" }} >
                            <BackArrow transparent={true} goBack={this.props.goBack} />
                            <h1>{this.Capitalize(category)}</h1>
                            <p>{this.Category(category)}</p>
                        </div>
                        : category === "film"
                            ? <div className="category-page-hero" style={{ backgroundImage: "url(/assets/images/movie.jpg)" }} >
                                <BackArrow transparent={true} goBack={this.props.goBack} />
                                <h1>{this.Capitalize(category)}</h1>
                                <p>{this.Category(category)}</p>
                            </div>
                            : category === "musik"
                                ? <div className="category-page-hero" style={{ backgroundImage: "url(/assets/images/music.jpg)" }} >
                                    <BackArrow transparent={true} goBack={this.props.goBack} />
                                    <h1>{this.Capitalize(category)}</h1>
                                    <p>{this.Category(category)}</p>
                                </div>
                                : category === "teater"
                                    ? <div className="category-page-hero" style={{ backgroundImage: "url(/assets/images/teater.jpg)" }} >
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