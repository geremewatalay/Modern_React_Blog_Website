import React from 'react';
import { FaClock, FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import SideBar from '../components/SideBar';

const SingleBlog = () => {
    const data = useLoaderData();


    const { title, image, category, author, published_date, reading_time, content } = data[0];

    return (
        <div>
            <div className='py-40 bg-black text-center text-white px-4'>
                <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
            </div>

            {/* Blog details */}
            <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
                <div className='lg:w-3/4 mx-auto'>
                    <div>
                        <img src={image} alt={title} className='w-full mx-auto rounded' />
                    </div>
                    <h2 className='text-3xl font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                      <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>

                      <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>

                      <p className='text-base text-gray-500 mb-6'>{content}</p>
                      <div className='text-base text-gray-500 mb-6'>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus, iusto natus, iste quod praesentium accusantium voluptatem ex a possimus aperiam tempore obcaecati dolor sapiente inventore doloribus corporis iure reiciendis!
                        </p><br />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sit, necessitatibus atque, alias distinctio voluptas delectus ipsum recusandae earum quam ad porro accusantium, accusamus voluptatum possimus mollitia nam pariatur nihil?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo pariatur nobis accusamus consectetur voluptates delectus dolorem obcaecati, totam dolore tempore nihil in voluptatum impedit enim dolor iure iste excepturi nulla.</p><br />
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus, iusto natus, iste quod praesentium accusantium voluptatem ex a possimus aperiam tempore obcaecati dolor sapiente inventore doloribus corporis iure reiciendis!
                        </p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sit, necessitatibus atque, alias distinctio voluptas delectus ipsum recusandae earum quam ad porro accusantium, accusamus voluptatum possimus mollitia nam pariatur nihil?</p><br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo pariatur nobis accusamus consectetur voluptates delectus dolorem obcaecati, totam dolore tempore nihil in voluptatum impedit enim dolor iure iste excepturi nulla.</p>
                      </div>
                </div>
                <div className='lg:w-1/2'><SideBar/></div>
            </div>
        </div>
    );
};

export default SingleBlog;
