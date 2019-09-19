import React, { Component } from 'react';

class CategoryPageHero extends Component {
    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    render() {
        const { category } = this.props

        return (
            <div className="category-page-hero">
                <h1>{this.Capitalize(category)}</h1>
                {
                    category === "dans"
                        ? <p>ex “Från koreografi till samtal om salsa - här finner du allt material kopplat till dans”</p>
                        : category === "film"
                            ? <p>film beskrivning</p>
                            : category === "musik"
                                ? <p>musik beskrivning</p>
                                : <p>teater beskrivning</p>

                }
            </div>
        )
    }
}

export default CategoryPageHero;