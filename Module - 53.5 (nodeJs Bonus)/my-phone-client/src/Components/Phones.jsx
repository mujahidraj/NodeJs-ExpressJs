import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Phone from './Phone';

const Phones = () => {

  const data = useLoaderData();

  return (
    <div>
      <div>{data.length}</div>
      {
        data.map(items=><Link to={`/phone/${items.id}`}><p>{items.name}</p></Link>)
      }
    </div>
  );
};

export default Phones;