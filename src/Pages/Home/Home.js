import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';


const Home = () => {
    const services = useLoaderData();
    // console.log(services)

    return (
        <div className='sm:w-3/4 w-3/5 mx-auto'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-8 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-blue-900 mb-4">Check out my available services</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">With my services you will get whatever you want no time</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-blue-900 inline-flex"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            services.slice(0, 3).map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </div>
                    <Link to="/services" className="flex justify-center mt-2">
                        < button className="inline-flex text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                            See All</button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;