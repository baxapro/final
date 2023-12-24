import React from 'react'
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

export const PostItem = ({ post }) => {
    if (!post) {
        return (
            <div className='text-xl text-center text-white py-10'>
                Загрузка...
            </div>
        )
    }
    return (
            <Link to={`/${post._id}`} className='flex flex-col w-full md:flex-grow bg-gray-700 rounded-md overflow-hidden hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1'>
            <div className={post.imgUrl ? 'flex rounded-t-md h-60 ' : 'flex rounded-t-md'}>
                {post.imgUrl && (
                    <img
                        src={`http://localhost:4444/${post.imgUrl}`}
                        alt='img'
                        className=' w-full'
                    />
                )}
            </div>
            <div className='flex flex-col justify-between h-full p-4'>
                <div className='flex justify-between items-center mb-2'>
                    <div className='text-xs text-white opacity-50'>
                        {post.username}
                    </div>
                    <div className='text-xs text-white opacity-50'>
                        <Moment date={post.createdAt} format='D MMM YYYY' />
                    </div>
                </div>
                <div className='text-white text-xl font-semibold mb-2'>
                    {post.title}
                </div>
                <p className='text-white opacity-60 text-xs line-clamp-4 mb-4'>
                    {post.text}
                </p>
                <div className='flex gap-3 items-center mt-auto'>
                    <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                        <AiFillEye /> <span>{post.views}</span>
                    </button>
                    <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                        <AiOutlineMessage />{' '}
                        <span>{post.comments?.length || 0} </span>
                    </button>
                </div>
            </div>
        </Link>
    )
}
