import { Cat } from '../../App';
import Card from '../card/card.component';
import { CardListContainer } from './card-list.styles.jsx';

type CardListProps = {
	cats: Cat[];
};

const CardList = ({ cats }: CardListProps) => {
	return (
		<CardListContainer>
			{cats.map((cat) => {
				return <Card cat={cat} key={cat.id} />;
			})}
		</CardListContainer>
	);
};

export default CardList;
