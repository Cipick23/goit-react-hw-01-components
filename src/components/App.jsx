import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import user from './user.json'

export const App = () => {
  console.log(user)
  return (
    <div>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics/>
    </div>
  );
};
