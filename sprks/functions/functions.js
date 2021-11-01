import { CardDescription } from 'semantic-ui-react';

export function getRecommendedGames() {
  let recommendedObject = {
    image: '',
    title: '',
    description: '',
  };
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
