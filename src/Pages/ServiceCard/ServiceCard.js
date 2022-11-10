import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';


const ServiceCard = ({ service }) => {
    const { name, img, price, _id, rating, description } = service;
    // console.log(service);
    return (


        <div className="lg:w-1/3 md:w-1/2 p-4 w-full hover:shadow-xl ">
            <div className="block relative h-48 rounded overflow-hidden">
                <img alt="course" className="object-contain object-center w-full h-full block" src={img} />
            </div>
            <div className="mt-2 text-left">
                <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                <div className='flex  justify-start items-center'>
                    <AiFillStar className='text-orange-500'></AiFillStar>
                    <span className='ml-2 mr-4'>{rating.number}</span>
                    <span className="">${price}</span>
                </div>
                <div className='flex  justify-start items-center'>
                    <span className="">{description.slice(0, 100) + '...'}</span>
                </div>
                <Link to={`/services/${_id}`} className="flex justify-center mt-2 ">
                    < button className="inline-flex text-white text-center bg-black border-0 py-2 px-4 justify-center focus:outline-none hover:bg-green-600 rounded text-lg w-full">
                        Service Detail</button>
                </Link>


            </div>
        </div >

    );
};

export default ServiceCard;