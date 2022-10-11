import React from 'react'
import { IPostCard } from '../interfaces'



const PostCard = (post : IPostCard) => {
  return (
    <div>
        {post.title}
        {post.excerpt}
    </div>
  )
}

export default PostCard