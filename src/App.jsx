import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';

import user from './user.json';
import data from './data.json';
import friends from './friends.json';

export default function App() {
    return (
        <div>
            <h1 className="title">"Profile #1"</h1>

            <Profile 
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}

            />

            <h2 className="title">"Upload stats"</h2>

            {data.map(el => <Statistics
                // title="Upload stats"
                key={el.id}
                label={el.label}
                percentage={el.percentage}
            />)
            }

            <FriendList
                friends={friends}
            />
            
        </div>  
    )
}

