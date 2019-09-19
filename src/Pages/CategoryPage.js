import React, { Fragment } from 'react';

const CategoryPage = (props) => {

    const category = props.match.params.categoryId;
    console.log(props.location.state);

    return (
        <Fragment>
            <h1>This is the category page for {category}</h1>
        </Fragment>
    );
};

export default CategoryPage;