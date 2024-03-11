import axios from 'axios';

export const fetchDataRequest = () => ({ type: 'FETCH_DATA_REQUEST' });
export const fetchDataSuccess = (data) => ({ type: 'FETCH_DATA_SUCCESS', payload: data });
export const fetchDataFailure = (error) => ({ type: 'FETCH_DATA_FAILURE', payload: error });

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const options = {
        method: 'GET',
        url: 'https://api.github.com/users/saicharankalakonda',
        // headers: {
        //   'X-RapidAPI-Key': '6544dddd3cmsh6bf420073cc8a12p10426fjsn37878b95ccf6',
        //   'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        // }
      };
      const response = await axios.request(options);
      console.log(response)
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

