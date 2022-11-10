import React from 'react';

const Blog = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100 text-left px-2">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-purple-900">SQL | NoSQL</span>
                            <span className="mt-1 text-gray-500 text-sm">08 November 2021</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-sky-900 title-font mb-2">Difference between SQL and NoSQL</h2>
                            <p className="leading-relaxed">SQL stands for structured query language which is actually vertically scalable. SQL is a relational database where it stores the related data in a tabular form. It has predefined schema. SQL data is better for multi-row transactions. <br /> <br />
                                On the other hand, NoSQL database is non-relational which is horizontally scalable. NoSQL is unstructured data with dynamic schema. NoSQL is actually better for unstructured data such as JSON.
                            </p>

                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-purple-900">JWT Token</span>
                            <span className="mt-1 text-gray-500 text-sm">12 February 2021</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-sky-900 title-font mb-2">What is JWT, and how does it work?</h2>
                            <p className="leading-relaxed">JWT stands for JSON web Token which  defines a compact and self-contained way for securely transmitting information between parties as a JSON object. <br /> <br />
                                JWTs differ from other web tokens in that they contain a set of claims which are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                            </p>

                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-purple-900">Javascript | Node.js</span>
                            <span className="text-sm text-gray-500">17 July 2020</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-sky-900 title-font mb-2">What is the difference between javascript and NodeJS?</h2>
                            <p className="leading-relaxed">Node.js is a  server side javascript runtime environment which runs on the V8 engine and executes javascript code on the server. Its cross platform and open source. <br /> <br />
                                Javascript is a programming language which is used to write scripts and runs on the browser. On the other hand, Node.js is an interpreter or  the runtime environment for javascript. Node.js uses javascript which basically runs on the server side with the help of V8 engine. Node.js is a non-blocking, event driven I/O model.

                            </p>

                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-purple-900">Node.js</span>
                            <span className="text-sm text-gray-500">15 May 2022</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-sky-900 title-font mb-2">How does NodeJS handle multiple requests at the same time?</h2>
                            <p className="leading-relaxed">Whenever NodeJS receives multiple client requests it places those request into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop works as the listener for the EventQueue.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;