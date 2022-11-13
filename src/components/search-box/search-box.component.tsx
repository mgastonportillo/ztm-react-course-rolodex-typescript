import { ChangeEvent } from 'react';
import { SearchBoxInput } from './search-box.style.jsx';

type SearchBoxProps = {
	placeholder?: string;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ placeholder, onChangeHandler }: SearchBoxProps) => {
	return (
		<SearchBoxInput
			type="search"
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
	);
};

export default SearchBox;
