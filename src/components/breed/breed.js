import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import actions from '../../actions';
import SideNavigate from '.././sideNavigate/sideNavigate';
import './breed.css';

class Breed extends Component {

  componentWillMount(){
    this.getData();
  }

  componentDidUpdate(props){
    let oldProp = props.match.params.subname;
    let curProp = this.props.match.params.subname;
    if(oldProp !== curProp){
      this.getData(); 
    }
  }

  getData(){
    const breed = this.props.match.params.name || '';
    const subbreed = this.props.match.params.subname;
    const concatbreed = subbreed && `${breed}/${subbreed}`;

    this.props.getCurrentBreedsImages(concatbreed || breed);
  }

  componentWillUnmount(){
    this.props.clearImages();
  }

  render(){
  	const breed = this.props.match.params.name;
    return (
    	<div className="row">
    		<SideNavigate />
		  	<main className="album py-5 col-10">
		  	<div className="container col-12">
		  		<div className="text-center p-2 text-capitalize bg-secondary text-white mb-2 ">
            <h1>{breed}</h1>
          </div>
			  	<div className="row">			  		
			  		{this.props.dogImages.map((image, index) => (
			  			<div className="col-md-4" key={index}>
			  				<div className="card mb-4 shadow-sm">
			  					<div className="">
                    <img className="card-img-top p-3 col-12 image_height" src={image} alt='dog'/>
                  </div>
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
    dogImages: state.currentDogImage    
  }
}

const mapDispatchToProps = {
    getCurrentBreedsImages: actions.getCurrentBreedsImages,
    clearImages: actions.clearImages
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Breed));