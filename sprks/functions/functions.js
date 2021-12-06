
export function toggleFriendsAside() {
  const friends = document.getElementById('friends');
  const newFriends = document.getElementById('newFriends');
  if (friends.style.display === 'none') {
    friends.style.display = 'block';
    newFriends.style.display = 'none';
  } else {
    friends.style.display = 'none';
  }
}

export function toggleFriendsNew() {
  const friends = document.getElementById('friends');
  const newFriends = document.getElementById('newFriends');
  if (newFriends.style.display === 'none') {
    newFriends.style.display = 'block';
    friends.style.display = 'none';
  } else {
    newFriends.style.display = 'none';
  }
}
