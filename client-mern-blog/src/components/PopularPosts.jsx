import React from 'react'
import { Link } from 'react-router-dom'

export const PopularPosts = ({ post }) => {
    return (
        <div className='bg-gray-600 my-2 p-3 rounded-md hover:shadow-2xl'>
            <Link
                to={`${post._id}`}
                className='block text-sm text-white hover:text-gray-200'
            >
                {post.title}
            </Link>
        </div>
    )
}
