import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RootRedirect = () => {
  const accessToken = useSelector(state => state.user.accessToken);
  return accessToken ? <Redirect to="/main" /> : <Redirect to="/login" />;
};

export default RootRedirect;
