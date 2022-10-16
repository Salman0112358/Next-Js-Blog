import React, {useEffect, useState} from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';

const Comments = ({slug}) => {

  const [comments, setComments] = useState([]);


  useEffect(() => {

    getComments(slug).then((result) => {
      setComments(result)
    })

  },[])

  return (
    <>
    {comments.length > 0 && (
      <div className='bg-zinc-900 shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h3 className='tex-xl mb-8 font-semibold border-b pb-4'>
          {comments.length}
          {' '}
          {comments.length === 1 ? 'Comment' : 'Comments'}
        </h3>
        {comments.map((comment) => (
          <div key={comment.createdAt} className="border-b border-gray-100 mb-4 pb-4">
            <p className='mb-4'>
              <span className='font-semibold'>{comment.name}</span>
              {' '}
              Posted on : 
              {' '}
              {moment(comment.createdAt).format('MMM DD, YYYY')},
              {' '} 
              {moment(comment.createdAt).fromNow()}
            </p>
            <p className='whitespace-pre-line w-full text-violet-400 text-lg'>{parse(comment.comment)}</p>
          </div>
        ))}

      </div>
    )}
    </>
  )
}

export default Comments