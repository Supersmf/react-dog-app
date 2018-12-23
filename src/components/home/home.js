import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import actions from '../../actions';
import Sidebar from '.././sidebar/sidebar';
import './home.css';

class Home extends Component {

  componentDidMount(){
  	if(!this.props.dogImages.length){
  		this.props.getBreedsImages();
  	}
  }

  render(){
    return (
    	<div className="row allheight">
    	  <Sidebar className="" />
		  <main className="album py-5 col-10 my_img_bg">
		  	<div className="container col-12">
			  	<div className="row">			  	
			  		{this.props.dogImages.map((image, index) => (
			  			<div className="col-md-4" key={index}>
			  				<div className="card mb-4 shadow-sm card_height">
			  					 <NavLink className="" to={`/breed/${image.split('/')[4]}`}>
			  					 	<div className="">
			  					 		<img className="card-img-top p-3 col-12 image_height" src={image} alt='dog'/>
			  					 	</div>
			  						<h3 className="text-capitalize text-nowrap font-weight-bold text-muted text-center">
			  							{image.split('/')[4]}
			  						</h3>
			  					</NavLink>
			  				</div>
			  			</div>))}			  		
			  	</div>
			</div>
		  </main>
		  </div>
    	)
  	}
};

const mapStateToProps = (state) => {
  return {
    dogImages: state.dogImage
  }
}

const mapDispatchToProps = {
    getBreedsImages: actions.getBreedsImages
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));