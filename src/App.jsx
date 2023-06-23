import React from "react";
import Profile from "./components/Profile";
import FriendList from "./components/FriendList";
import Statistics from "./components/Statistics";
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json'

console.log(friends)
console.log(data)
console.log(user)

function App() {
  return (
    <>
      <Profile 
        ueserName={user.username}
        tag={user.tag}
        location={user.location}
        iconsUser={user.avatar}
        folower={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics 
        id={data.id}
        label={data.label}
        percentage={data.percentage}
      />
      <FriendList 
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
        id={friends.id}
      />
    </>
  );
}

export default App;
