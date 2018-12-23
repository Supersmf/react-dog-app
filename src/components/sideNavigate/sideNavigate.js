import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import actions from '../../actions/index';
// import './sideNavigate.css';

class SideNavigate extends Component {

  componentDidMount(){
    const breed = this.props.match.params.name;
    
    this.props.getSubBreedsList(breed); 
  }


  componentDidUpdate(props){
    let oldProp = props.match.params.subname;
    let curProp = this.props.match.params.subname;
    if(oldProp !== curProp){
      this.props.getBreedsList(curProp); 
    }
  }

  render(){
    const breed = this.props.match.params.name;    
    const sub = (this.props.subDogs.length) ?
      (<h3 className="mt-5 text-center">Sub-breed</h3>) : '';

    return (      
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="navbar-nav flex-column mt-5">
            <li className="nav-item btn btn-light p-0">
              <NavLink className="nav-link text-capitalize text-nowrap font-weight-bold list_item" to='/'>
                Back to main page
              </NavLink>
              </li>
          </ul>
          {sub}
          <ul className="navbar-nav flex-column">
              {this.props.subDogs.map((dog, index) => (
                  <li className="nav-item btn btn-light p-0 border-bottom" key={index}>
                    <NavLink className="nav-link text-capitalize text-nowrap font-weight-bold list_item" 
                              to={`/breed/${breed}/${dog}`}>{dog}</NavLink>
                  </li>))}
          </ul>
        </div>
      </nav>
    )
  }
};

const mapStateToProps = (state) => ({
    subDogs: state.dogSubList
})

const mapDispatchToProps = {
    getBreedsList: actions.getBreedsList,
    getSubBreedsList: actions.getSubBreedsList
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNavigate));