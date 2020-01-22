import React from 'react';

const Artist = ({ artist }) => {
  if(!artist){
    return null;
  }
  // by returning null, react knows not to render anything

  const { images, name, followers, genres } = artist;

  return(
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(', ')}</p>
      <img 
        src={images[0] && images[0].url} 
        alt='artist-profile' 
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: 'cover'
        }}  
      />
      {/* this will check if images[0] is defined or not */}
      {/* if it is defined then images[0].url is assigned to src */}
    </div>
  )
}

// .join() method is used to join all elements of array 
// with the string specified as parameter

export default Artist;