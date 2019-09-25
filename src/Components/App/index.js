import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import "./style.css";
import StartPage from '../../Pages/StartPage';
import CategoryPage from '../../Pages/CategoryPage';
import PlayerPage from '../../Pages/PlayerPage';
import Layout from '../Layout';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';

const App = () => {
	
	const [audioUrl, setAudioUrl] = useState(null);

	return (
		<Router>
			<AudioPlayerContext.Provider
				value={{ audioUrl, setAudioUrl }}>
				<Layout>
					<Switch>
						<Route path="/" exact component={StartPage}/>
						<Route path="/category/:categoryId" component={CategoryPage}/>
						<Route path="/player/:playerId" component={PlayerPage}/>
						{/* <Route component={NotFound}/> */}
					</Switch>
				</Layout>
			</AudioPlayerContext.Provider>
		</Router>
	);
}

export default App;