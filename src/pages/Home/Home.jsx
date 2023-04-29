import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagories from '../../components/Catagory/Catagories';

const Home = () => {
    const loader=useLoaderData();
    console.log(loader);
    return (
        <div>
            <div className='grid grid-cols-3'>
                {
                    loader.map((data,idx)=><Catagories data={data} key={idx}></Catagories>)
                }
            </div>
        </div>
    );
};

export default Home;