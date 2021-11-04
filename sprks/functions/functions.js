export function getRecommendedGames() {
  let recommendedList = [
    {
      listTitle: 'Recommended for you',
      Image: 'https://cdn.80.lv/api/upload/content/e1/5d2c88a790e80.jpg',
      Title: 'Roblox',
      Description: 'Nummer 1 spelplattform i världen.',
    },
    {
      Image: 'http://i.imgur.com/58lD2.jpg',
      Title: 'Test',
      Description: 'test beskriving 2',
    },
    {
      Image:
        'https://pluralsight.imgix.net/course-images/game-environment-concept-design-v2.jpg',
      Title: 'Test',
      Description: 'test beskriving 3',
    },
    {
      Image:
        'https://cdn-learning.artstation.com/p/courses/covers/000/000/075/large/cover-1574847827.jpg?1574847827',
      Title: 'Test',
      Description: 'test beskriving 4',
    },
    {
      Image:
        'https://i.pinimg.com/originals/81/c0/62/81c06269d414e8f929cbc68c21776a3b.jpg',
      Title: 'Test',
      Description: 'test beskriving 5',
    },
    {
      Image:
        'https://blog.roblox.com/wp-content/uploads/2016/12/Catching-Fire.jpg',
      Title: 'Test',
      Description: 'ROBLOX',
    },
  ];

  return recommendedList;
}
export function getPopularGames() {
  let popularList = [
    {
      listTitle: 'Popular games',
      Image: 'http://i.imgur.com/58lD2.jpg',
      Title: 'Test',
      Description: 'test beskriving 2',
    },
    {
      Image:
        'https://pluralsight.imgix.net/course-images/game-environment-concept-design-v2.jpg',
      Title: 'Test',
      Description: 'test beskriving 3',
    },
    {
      Image:
        'https://cdn-learning.artstation.com/p/courses/covers/000/000/075/large/cover-1574847827.jpg?1574847827',
      Title: 'Test',
      Description: 'test beskriving 4',
    },
    {
      Image:
        'https://i.pinimg.com/originals/81/c0/62/81c06269d414e8f929cbc68c21776a3b.jpg',
      Title: 'Test',
      Description: 'test beskriving 5',
    },
    {
      listTitle: 'Recommended for you',
      Image: 'https://cdn.80.lv/api/upload/content/e1/5d2c88a790e80.jpg',
      Title: 'Test',
      Description: 'test beskriving 1',
    },
    {
      Image:
        'https://blog.roblox.com/wp-content/uploads/2016/12/Catching-Fire.jpg',
      Title: 'Test',
      Description: 'ROBLOX',
    },
  ];

  return popularList;
}

export function getFriendsPlaying() {
  let friendsPlayingList = [
    {
      listTitle: 'Friends currently playing',
      Image:
        'https://blog.roblox.com/wp-content/uploads/2016/12/Catching-Fire.jpg',
      Title: 'Test',
      Description: 'ROBLOX',
    },
    {
      Image:
        'https://cdn-learning.artstation.com/p/courses/covers/000/000/075/large/cover-1574847827.jpg?1574847827',
      Title: 'Test',
      Description: 'test beskriving 4',
    },
    {
      Image: 'http://i.imgur.com/58lD2.jpg',
      Title: 'Test',
      Description: 'test beskriving 2',
    },
    {
      Image: 'https://cdn.80.lv/api/upload/content/e1/5d2c88a790e80.jpg',
      Title: 'Test',
      Description: 'test beskriving 1',
    },

    {
      Image:
        'https://pluralsight.imgix.net/course-images/game-environment-concept-design-v2.jpg',
      Title: 'Test',
      Description: 'test beskriving 3',
    },
    {
      Image:
        'https://i.pinimg.com/originals/81/c0/62/81c06269d414e8f929cbc68c21776a3b.jpg',
      Title: 'Test',
      Description: 'test beskriving 5',
    },
  ];
  return friendsPlayingList;
}

export function toggleFriendsAside() {
  const friends = document.getElementById('friends');
  const newFriends = document.getElementById('newFriends');
  if (friends.style.display === "none") {
    friends.style.display = "block";
    newFriends.style.display = "none";
  } else {
    friends.style.display = "none";
  }
}

export function toggleFriendsNew() {
  const friends = document.getElementById('friends');
  const newFriends = document.getElementById('newFriends');
  if (newFriends.style.display === "none") {
    newFriends.style.display = "block";
    friends.style.display = "none";
  } else {
    newFriends.style.display = "none";
  }
}
