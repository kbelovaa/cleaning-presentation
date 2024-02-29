import {
  SET_IP_COUNTRY,
} from '../../constants/actionsRedux';

const defaultState = {
  ipCountry: ''
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_IP_COUNTRY:
      return { ...state, ipCountry: action.payload };
    default:
      return state;
  }
};

export default userReducer;
