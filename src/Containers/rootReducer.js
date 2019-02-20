// import { ADD_COMMENT, DELETE_COMMENT, HANDLE_POST } from './actionTypes';

function rootReducer(state = { items: [{
  sku: 1234,
  title:'Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red',
  price:99.11,
  priceSlash:102.96,
  qty: 1
}]},action) {

  console.log('reducer ran; state & action:', state, action);

  let newState;

  switch (action.type) {
    // case HANDLE_POST:
    //   return {blogPosts:{...state.blogPosts, ...action.newPost}};
    
    default:
      return state;
  }
}

export default rootReducer;
