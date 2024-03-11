// SomeComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions/fetchData';
import someReducer from '../redux/reducers/SomeReducer';

const SomeComponent = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(state => state.someReducer);

  useEffect(() => {
      console.log("hi")
    dispatch(fetchData());
  }, [ ]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h5>application has been rendered</h5>
    </div>
  );
};

export default SomeComponent;