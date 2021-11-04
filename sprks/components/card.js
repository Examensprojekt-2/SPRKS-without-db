function Card({ picture, text, title }) {
  return (
    
    <div class='max-w-sm bg-transparent shadow-lg rounded overflow-hidden '>
      <img class='w-full' src={picture} alt='Mountain' />
      <div class='px-6 py-4 shadow-xl'>
        <div class='font-bold text-xl mb-2'>{title}</div>
        <p class='text-gray-700 text-base'>{text}</p>
      </div>
      <div class='px-6 pt-4 pb-2 shadow-xl'>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #photography
        </span>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #travel
        </span>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #winter
        </span>
      </div>
    </div>
   
  );
}

export default Card;
