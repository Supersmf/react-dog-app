import axios from 'axios';

const URL_BREEDS_LIST = 'https://dog.ceo/api/breeds/list/all';
const URL_SUB_BREEDS_LIST = 'https://dog.ceo/api/breed';
const URL_BREED_IMAGES = 'https://dog.ceo/api/breeds/image/random/30';
const URL_BREED_CURRENT = 'https://dog.ceo/api/breed';

const getBreedsList = () => dispatch => {
  axios.get(URL_BREEDS_LIST)
    .then(({data}) => {
      dispatch({
        type: 'FETCH_BREED_LIST',
        payload: data.message
      });
    })
    .catch(error => console.log(`getBreedsList: ${error.message}`));
};

const getSubBreedsList = (breed) => dispatch => {
  axios.get(`${URL_SUB_BREEDS_LIST}/${breed}/list`)
  	.then(({data}) => {
  		dispatch({
  			type: 'FETCH_SUB_BREED_LIST',
  			payload: data.message
  		});
  	})
    .catch(error => console.log(`getSubBreedsList: ${error.message}`));
};

const getBreedsImages = () => dispatch => {
  axios.get(URL_BREED_IMAGES)
    .then(({data}) => {
      dispatch({
        type: 'FETCH_DOGS_IMAGE',
        payload: data.message
      });
    })
    .catch(error => console.log(`getBreedsImages: ${error.message}`));
};

const getCurrentBreedsImages = (breed) => dispatch => {
  axios.get(`${URL_BREED_CURRENT}/${breed}/images`)
  	.then(({data}) => {
  		dispatch({
  			type: 'FETCH_DOGS_CURRENT_IMAGE',
  			payload: data.message
  		});
  	})
    .catch(error => console.log(`getCurrentBreedsImages: ${error.message}`));
};

const clearImages = () => dispatch => {
    dispatch({
        type: 'FETCH_DOGS_CURRENT_IMAGE',
        payload: []
    })
};


export default {
  getBreedsList,
  getBreedsImages,
  getCurrentBreedsImages,
  clearImages,
  getSubBreedsList
}