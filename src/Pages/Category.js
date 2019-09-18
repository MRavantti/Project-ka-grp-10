import React, { Fragment } from 'react';

const Category = (props) => {

    const category = props.match.params.categoryId;

    return (
        <Fragment>
            <h1>This is the category page for {category}</h1>
        </Fragment>
    );
};

export default Category;