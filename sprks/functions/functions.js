export function getRecommendedGames() {
  let recommendedList = [
    {
      listTitle: 'Recommended for you',
      Image: 'https://cdn.80.lv/api/upload/content/e1/5d2c88a790e80.jpg',
      Title: 'Roblox',
      Description: 'Nummer 1 spelplattform i världen. Först med denna idé ',
      Likes: 45,
      Tags: ["#action", "#roleplay"]
    },
    {
      Image: 'http://i.imgur.com/58lD2.jpg',
      Title: 'Test',
      Description: 'test beskriving 2',
      Likes: 32,
      Tags: ['#fps', '#fantasy', '#building']
    },
    {
      Image:
        'https://pluralsight.imgix.net/course-images/game-environment-concept-design-v2.jpg',
      Title: 'Test',
      Description: 'test beskriving 3',
      Likes: 11,
      Tags: ['#mmo', '#strategy', '#freeforall']
    },
    {
      Image:
        'https://cdn-learning.artstation.com/p/courses/covers/000/000/075/large/cover-1574847827.jpg?1574847827',
      Title: 'Test',
      Description: 'test beskriving 4',
      Likes: 3,
      Tags: ['#pvp', '#br', '#fps']
    },
    {
      Image:
        'https://i.pinimg.com/originals/81/c0/62/81c06269d414e8f929cbc68c21776a3b.jpg',
      Title: 'Test',
      Description: 'test beskriving 5',
      Likes: 102,
      Tags: ['#building', '#creative']
    },
    {
      Image:
        'https://blog.roblox.com/wp-content/uploads/2016/12/Catching-Fire.jpg',
      Title: 'Test',
      Description: 'ROBLOX',
      Likes: 63,
      Tags: ['#adventure', '#creative', '#building']
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
      Likes: 21,
      Tags: ["#action", "#roleplay"]
    },
    {
      Image:
        'https://pluralsight.imgix.net/course-images/game-environment-concept-design-v2.jpg',
      Title: 'Test',
      Description: 'test beskriving 3',
      Likes: 13,
      Tags: ['#fps', '#fantasy', '#building']
    },
    {
      Image:
        'https://cdn-learning.artstation.com/p/courses/covers/000/000/075/large/cover-1574847827.jpg?1574847827',
      Title: 'Test',
      Description: 'test beskriving 4',
      Likes: 5,
      Tags: ['#mmo', '#strategy', '#freeforall']
    },
    {
      Image:
        'https://i.pinimg.com/originals/81/c0/62/81c06269d414e8f929cbc68c21776a3b.jpg',
      Title: 'Test',
      Description: 'test beskriving 5',
      Likes: 8,
      Tags: ['#pvp', '#br', '#fps']
    },
    {
      listTitle: 'Recommended for you',
      Image: 'https://cdn.80.lv/api/upload/content/e1/5d2c88a790e80.jpg',
      Title: 'Test',
      Description: 'test beskriving 1',
      Likes: 211,
      Tags: ['#building', '#creative']
    },
    {
      Image:
        'https://blog.roblox.com/wp-content/uploads/2016/12/Catching-Fire.jpg',
      Title: 'Test',
      Description: 'ROBLOX',
      Likes: 32,
      Tags: ['#adventure', '#creative', '#building']
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
      Likes: 61,
      Tags: ["#action", "#roleplay"]
    },
    {
      Image:
        'https://cdn-learning.artstation.com/p/courses/covers/000/000/075/large/cover-1574847827.jpg?1574847827',
      Title: 'Test',
      Description: 'test beskriving 4',
      Likes: 22,
      Tags: ['#fps', '#fantasy', '#building']
    },
    {
      Image: 'http://i.imgur.com/58lD2.jpg',
      Title: 'Test',
      Description: 'test beskriving 2',
      Likes: 15,
      Tags: ['#mmo', '#strategy', '#freeforall']
    },
    {
      Image: 'https://cdn.80.lv/api/upload/content/e1/5d2c88a790e80.jpg',
      Title: 'Test',
      Description: 'test beskriving 1',
      Likes: 34,
      Tags: ['#pvp', '#br', '#fps']
    },

    {
      Image:
        'https://pluralsight.imgix.net/course-images/game-environment-concept-design-v2.jpg',
      Title: 'Test',
      Description: 'test beskriving 3',
      Likes: 16,
      Tags: ['#building', '#creative']
    },
    {
      Image:
        'https://i.pinimg.com/originals/81/c0/62/81c06269d414e8f929cbc68c21776a3b.jpg',
      Title: 'Test',
      Description: 'test beskriving 5',
      Likes: 85,
      Tags: ['#adventure', '#creative', '#building']
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
