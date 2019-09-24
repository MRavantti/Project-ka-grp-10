import React from 'react';
import Navbar from '../Navbar';
import CoursesBox from '../CoursesBox';
import Footer from '../Footer';
import PlayerMinimized from '../PlayerMinimized';
import podcasts from '../../data/soundcloud.json';

const Layout = ({children}) => {
	const content = podcasts[0];
    return (
        <div className="layout">
            <Navbar/>
            {children}
            <CoursesBox/>
			<PlayerMinimized
                    streamUrl={content.url}
                    trackTitle={content.title}
                    preloadType="metadata"
					clientId={process.env.REACT_APP_SC_CLIENT_ID}
					content={content}
                />
            <Footer/>
        </div>
    );
};

export default Layout;