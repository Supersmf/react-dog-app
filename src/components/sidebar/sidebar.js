import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import actions from '../../actions/index';
import './sidebar.css';

class Sidebar extends Component {

  componentDidMount(){
    if(!this.props.dogs.length){
      this.props.getBreedsList();
    }
  }

  render(){
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="navbar-nav flex-column mt-5">
            {this.props.dogs.map(dog => (
              <li className="nav-item btn btn-light p-0 border-bottom" key={dog.id}>
                <NavLink className="nav-link text-capitalize text-nowrap font-weight-bold list_item" 
                          to={`/breed/${dog.breed}`}>{dog.breed}</NavLink>
              </li>))}
          </ul>
        </div>
      </nav>
    )
  }
};

const mapStateToProps = (state) => ({
    dogs: state.doglist
})

const mapDispatchToProps = {
    getBreedsList: actions.getBreedsList
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));