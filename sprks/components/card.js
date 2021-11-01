function Card ({header, text, likes, tags, picture}) {

  return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={picture} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{header}</div>
        <p className="text-gray-700 text-base">
          {text}
        </p>
          <button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
            Like
          </button> 
          <span className="text-white ml-5">{likes} Likes</span>
      </div>
      <div className="px-6 pt-4 pb-2">


        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tags}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tags}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
    )
}

export default Card;