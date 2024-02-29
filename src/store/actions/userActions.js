import {
  SET_IP_COUNTRY,
} from '../../constants/actionsRedux';

export const setIpCountryAction = (payload) => ({
  type: SET_IP_COUNTRY,
  payload,
});
