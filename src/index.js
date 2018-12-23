import React, { lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';
import Loading from './components/load/load';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const Home = lazy(() => import('./components/home/home'));
const Breed = lazy(() => import('./components/breed/breed'));
const About = lazy(() => import('./components/about/about'));
const Error = lazy(() => import('./components/error/error'));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Suspense fallback={<Loading/>}>
					<Switch>
						<Route exact path='/' render={()=> <Home />} />
						<Route exact path='/breed/:name' render={()=> <Breed />} />
						<Route path='/breed/:name/:subname' render={()=> <Breed />} />
						<Route path='/about' render={()=> <About />} />
						<Route path='*' render={()=> <Error />} />
					</Switch>
				</Suspense>
			</App>
		</BrowserRouter>
	</Provider>, 
		document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();