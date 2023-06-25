import React from "react";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import Friendlist from "./components/Friendlist";
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json'

console.log(friends)

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
        title={'Upload stats'} 
        data={data}
      />
      <Friendlist
        friends={friends}
      />
    </>
  );
}

export default App;
