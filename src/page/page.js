import React from 'react';
import './page.css';
import HeaderComponent from '../header/header';
import Collection1Component from '../collection1/collection1';
import { Route, Switch, Redirect } from 'react-router-dom';
import JewellaryComponent from '../men-jewellary/men-jewellary';
import ProductDetailComponent from '../productdetail/productdetail';



const PageComponent=()=> {
  return (
    <div>
		<HeaderComponent />
		<div className='new'>
		<Switch >
			<Route 
				exact={true} 
				path='/' 
				component={Collection1Component}>
			</Route>

			<Route 
				exact={true} 
				path='/men-jewellary' 
				component={JewellaryComponent}>
			</Route>

			<Route 
				exact={true} 
				path='/detail' 
				component={ProductDetailComponent}>
			</Route>


		</Switch>
		</div>
	</div>
  );
}

export default PageComponent;
