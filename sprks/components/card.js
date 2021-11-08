function Card({ picture, text, likes, title, tags }) {
  return (
    <div class='mx-auto md:w-auto md:max-w-5xl pb-4 bg-transparent max-h-screen shadow-sm flex-row rounded-t-lg relative ml-3 mr-3'>
      <img class='w-full rounded-t-lg' src={picture} alt='Mountain'  />
      <div class='px-6 py-4'>
        <div class='font-bold text-xl mb-2 text-gray-200'>{title}</div>
          {text.length > 50 ? (
            <p class='text-gray-300 text-base'>{text.slice(0,47)}...</p>
          ) : (
            <p class='text-gray-300 text-base'>{text}</p>
          )}
      </div>
      <div class='text-center'>
      <button class='bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
        </svg>
      </button>
          { likes > 0 ? (
            <p class='text-center text-gray-200'>{likes} likes</p>
          ) : (
            <p class='text-center text-gray-200'>0 likes</p>
          )}
      </div>

      <div class='px-6 pt-4 pb-2 text-center'>
        { tags && (
          tags.map(tag => {
            return (
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              {tag}
            </span>
            )
          })
        )}
      </div>
    </div>
   
  );
}

export default Card;
