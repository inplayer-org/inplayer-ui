import React from 'react';
import Loader from './Loader';

const style = {
  marginTop: '20px',
  marginLeft: '20px',
};

const App = () => (
  <Loader style={style} color="red" lineWidth={5} direction="up" height={150} width={150} />
);

export default App;
