import FriendList from "./components/Friendlist";
import Statistics from "./components/Statistics";
import user from './data/user.json';
import data from './data/data.json';

function App() {
  return (
    <>
      <FriendList 
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
    </>
  );
}

export default App;
