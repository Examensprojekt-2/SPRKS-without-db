import Card from './card';

function LikedGames() {
  const picture =
    'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80';
  const text = 'Liked Games component';

  return (
    <div className='container'>
      <Card picture={picture} text={text} />
    </div>
  );
}

export default LikedGames;
