import React, { Fragment } from 'react';
import CategoryPageHero from '../Components/CategoryPageHero';
import ContentContainer from '../Components/ContentContainer';

import videos from '../data/youtube';
import podcasts from '../data/soundcloud';

const CategoryPage = (props) => {

    const category = props.match.params.categoryId;
    console.log(props.location.state);

    return (
        <Fragment>
            <CategoryPageHero category={category} />
            <ContentContainer size="small" type="sound" text="Senaste Podcasts" />
            <ContentContainer size="small" type="video" text="Senaste Videoföreläsningar" />
            <ContentContainer size="small" type="video" text="Kategori Namn"/>
        </Fragment>
    );
};

export default CategoryPage;