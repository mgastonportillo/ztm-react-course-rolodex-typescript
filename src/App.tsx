import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';
import './App.css';

export type Cat = {
	id: number;
	name: string;
	address: { street: string; suite: string };
};

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [cats, setCats] = useState<Cat[]>([]);
	const [filteredCats, setFilteredCats] = useState(cats);

	useEffect(() => {
		const fetchCats = async () => {
			const users = await getData<Cat[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setCats(users);
		};

		fetchCats();
	}, []);

	useEffect(() => {
		const catsAll = cats.filter((cat: Cat) => cat.id !== 8);

		catsAll.splice(7, 0, {
			id: 8,
			name: 'Lily',
			address: { street: 'Home', suite: 'with Mum' },
		});

		const newFilteredCats = catsAll.filter((cat) => {
			return cat.name.toLocaleLowerCase().includes(searchField);
		});

		setFilteredCats(newFilteredCats);
	}, [cats, searchField]);

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title">Catto Rolodex</h1>
			<SearchBox onChangeHandler={onSearchChange} placeholder="search cats" />
			<CardList cats={filteredCats} />
		</div>
	);
};

export default App;
