import React from 'react';
import { useLoaderData } from 'react-router';

const Phone = () => {

  const data = useLoaderData();
  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.image} alt="" />
    
    </div>
  );
};

export default Phone;