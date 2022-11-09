import React from 'react';


const Home = () => {
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
                    {/* <div className="flex flex-wrap -m-4">
                        {
                            courses.map(course => <CourseCard
                                key={course.id}
                                course={course}
                            ></CourseCard>)
                        }
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Home;