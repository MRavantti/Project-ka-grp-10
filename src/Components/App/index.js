import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import "./style.css";
import StartPage from '../../Pages/StartPage';
import CategoryPage from '../../Pages/CategoryPage';
import Layout from '../Layout';

// import soundcloud from '../../data/soundcloud.json';
// import youtube from '../../data/youtube.json';

// const data = [...soundcloud, ...youtube];

const App = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route path="/" exact component={StartPage} />
					<Route path="/category/:categoryId" component={CategoryPage}/>
					{/* <Route path="/play" component={PlayPage}/> */}
					{/* <Route component={NotFound}/> */}
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;