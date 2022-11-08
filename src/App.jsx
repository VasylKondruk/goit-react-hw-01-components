import Profile from './components/Profile';
import Statistics from './components/Statistics';

import user from './user.json';
import data from './data.json';

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
            
        </div>  
    )
}

