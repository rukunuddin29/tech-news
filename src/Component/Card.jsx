import React from 'react';

function Card({ title, description, src, url }) {
  return (
    <div className='mx-4 lg:mx-52 mt-10 bg-slate-800 rounded-xl flex flex-col md:flex-row overflow-hidden shadow-lg transition-transform transform hover:scale-105'>
      <a href={url} target="_blank" rel="noopener noreferrer" className='flex-shrink-0 w-full md:w-1/2'>
        <img
          className='h-full w-full object-cover'
          src={src}
          alt={title}
        />
      </a>
      <div className='flex flex-col justify-center p-6 w-full md:w-1/2'>
        <h5 className='mb-2 text-xl font-medium text-white'>{title}</h5>
        <p className='mb-4 text-base text-neutral-300'>{description}</p>
        <p className='text-xs text-surface/75 dark:text-red-500'>
          Click image to read more
        </p>
      </div>
    </div>
  );
}

export default Card;
