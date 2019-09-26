import React, { Fragment, useState, useEffect } from 'react';
import CategoryPageHero from '../Components/CategoryPageHero';
import ContentContainer from '../Components/ContentContainer';

import videos from '../data/youtube';
import podcasts from '../data/soundcloud';

const CategoryPage = (props) => {

	const category = props.match.params.categoryId;

	const [filter, setFilter] = useState(null);

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

	const [categoryContent, setCategoryContent] = useState(
		<Fragment>
			<ContentContainer size="small" text="Senaste Podcasts" content={categoryPodcasts.slice(0, 15)}/>
			<ContentContainer size="small" text="Senaste Videoföreläsningar" content={categoryVideos.slice(0, 15)}/>
			<ContentContainer size="small" text="Podcasts utvalda för dig" content={categoryPodcasts.slice(15, 30)}/>
		</Fragment>
	);

	useEffect(() => {
		if (filter === "videos") {
			setCategoryContent(<Fragment>
				<ContentContainer size="small" text="Senaste Videoföreläsningar" content={categoryVideos.slice(0, 15)}/>
				<ContentContainer size="small" text="Relaterade Videor" content={categoryVideos.slice(0, 15)}/>
				<ContentContainer size="small" text="Videor utvalda för dig" content={categoryVideos.slice(0, 15)}/>
			</Fragment>)
		} else if (filter === "podcasts") {
			setCategoryContent(<Fragment>
				<ContentContainer size="small" text="Senaste Podcasts" content={categoryPodcasts.slice(0, 15)}/>
				<ContentContainer size="small" text="Relaterade Podcasts" content={categoryPodcasts.slice(0, 15)}/>
				<ContentContainer size="small" text="Podcasts utvalda för dig" content={categoryPodcasts.slice(15, 30)}/>
			</Fragment>)
		}
	}, [filter])

	const filterFunc = (e) => {
		let type = e.target.textContent;
		
		type = type === "Videor" ? "videos" : "podcasts";

		if (type === filter) {
			setCategoryContent(<Fragment>
				<ContentContainer size="small" text="Senaste Podcasts" content={categoryPodcasts.slice(0, 15)}/>
				<ContentContainer size="small" text="Senaste Videoföreläsningar" content={categoryVideos.slice(0, 15)}/>
				<ContentContainer size="small" text="Podcasts utvalda för dig" content={categoryPodcasts.slice(15, 30)}/>
			</Fragment>);
			setFilter(null);
		}
		else if (type === "videos") {
			setFilter(type);
		}
		else if (type === "podcasts") {
			setFilter(type);
		}
	}

    return (
        <Fragment>
            <CategoryPageHero category={category} goBack={props.history.goBack} filterFunc={filterFunc} filter={filter}/>
			{categoryContent}
        </Fragment>
    );
};

export default CategoryPage;