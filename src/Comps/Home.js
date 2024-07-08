import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/Context1';
import Search from './Search';
import { useSearchParams } from 'react-router-dom';
import Workers from './Workers';

export default function Home() {
  const { setSeed } = useContext(AppContext);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSeed(search);
    }
  }, [searchParams, setSeed]);

  return (
    <div className='home_container'>
      <div className="banner">
        <div className="search_container">
          <Search />
        </div>
      </div>
      <div className='listContainer'>
        <Workers />
      </div>
    </div>
  );
}
