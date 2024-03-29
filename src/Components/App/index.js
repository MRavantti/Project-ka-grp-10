import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import "./style.css";
import StartPage from '../../Pages/StartPage';
import CategoryPage from '../../Pages/CategoryPage';
import PlayerPage from '../../Pages/PlayerPage';
import RelatedPage from '../../Pages/RelatedPage';
import CoursesPage from '../../Pages/CoursesPage';
import ProfilePage from '../../Pages/ProfilePage';
import RegistrationPage from '../../Pages/RegistrationPage';
import LoginPage from '../../Pages/LoginPage';
import Layout from '../Layout';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import ScrollToTop from "../../functions/scrollToTop";

const App = () => {
	
	const [audioUrl, setAudioUrl] = useState(null);

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<Router>
			<ScrollToTop/>
			<AudioPlayerContext.Provider
				value={{ audioUrl, setAudioUrl }}>
				<LoggedInContext.Provider
					value={{ isLoggedIn, setIsLoggedIn}}>
				<Layout>
					<Switch>
						<Route path="/" exact component={StartPage}/>
						<Route path="/category/:categoryId" component={CategoryPage}/>
						<Route path="/player/:playerId" component={PlayerPage}/>
						<Route path="/related-courses" component={RelatedPage} />
						<Route path="/courses" component={CoursesPage} />
						<Route path="/profile/:type" component={ProfilePage} /> {/*hello*/}
						<Route path="/registration" component={RegistrationPage} /> {/*hello*/}
						<Route path="/login" component={LoginPage} /> {/*hello*/}
						{/* <Route component={NotFound}/> */}
					</Switch>
				</Layout>
				</LoggedInContext.Provider>
			</AudioPlayerContext.Provider>
		</Router>
	);
}

export default App;