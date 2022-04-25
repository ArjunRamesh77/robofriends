import { render } from '@testing-library/react';
import {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
             .then(response => response.json())
             .then(users => setRobots(users))
    }, [])

    const onSearchChange = (event) => {
        setSearchfield(old => event.target.value)
    }

    const filteredRobots = robots.filter(user => {
        return user.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return robots.length === 0 ? 
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1>Robofriends</h1>
                <button onClick={() => setCount(old => old + 1)}>Click Me!</button>
                <h3>{count}</h3>
                <SearchBox searchChange={onSearchChange} />
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </div>
        )
}

export default App;