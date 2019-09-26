import React, { Fragment } from 'react';
import CategoryPageHero from '../Components/CategoryPageHero';
import ContentContainer from '../Components/ContentContainer';

import videos from '../data/youtube';
import podcasts from '../data/soundcloud';

const CategoryPage = (props) => {

	const category = props.match.params.categoryId;

	let categoryVideos = videos.filter(item => {
		if (item.tags) {
			let tagIncludes;
			item.tags.map(tag => {
				if (tag.toLowerCase().includes(category)) {
					tagIncludes = true;
				}
			})
			if (tagIncludes) {
				return item;
			}
		}
	})

	categoryVideos = categoryVideos.length < 15 ? videos : categoryVideos;
	
	let categoryPodcasts = podcasts.filter(item => {
		if (item.tags) {
			let tagIncludes;
			item.tags.map(tag => {
				if (tag.toLowerCase().includes(category)) {
					tagIncludes = true;
				}
			})
			if (tagIncludes) {
				return item;
			}
		}
	})
	
	categoryPodcasts = categoryPodcasts.length < 30 ? podcasts : categoryPodcasts;


    return (
        <Fragment>
            <CategoryPageHero category={category} goBack={props.history.goBack}/>
            <ContentContainer size="small" text="Senaste Podcasts" content={categoryPodcasts.slice(0, 15)}/>
            <ContentContainer size="small" text="Senaste Videoföreläsningar" content={categoryVideos.slice(0, 15)}/>
            <ContentContainer size="small" text="Kategori Namn" content={categoryPodcasts.slice(15, 30)}/>
        </Fragment>
    );
};

export default CategoryPage;