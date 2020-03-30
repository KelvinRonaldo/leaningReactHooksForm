import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HooksForm from './pages/hooksForm';

export default function Routes(){
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={HooksForm}/>
			</Switch>
		</BrowserRouter>
	)
}