export function getRecommendedGames() {
  return null;
}
export function getPopularGames() {
  return null;
}
export function getFriendsPlaying() {
  return null;
}
export function toggleFriendsAside() {
  const friends = document.getElementById('friends').classList;
  friends.toggle('hidden');
}

export function toggleFriendsNew() {
  const newFriends = document.getElementById('newFriends').classList;
  newFriends.toggle('hidden');
}
