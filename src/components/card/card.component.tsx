import { Cat } from '../../App';
import Lily from '../../assets/img/lily.png';
import {
	CardContainer,
	CardImage,
	CardName,
	CardAddress,
} from './card.styles.jsx';

type CardProps = {
	cat: Cat;
};

const Card = ({ cat }: CardProps) => {
	const { name, address, id } = cat;

	return (
		<CardContainer>
			<CardImage
				src={
					id === 8 ? Lily : `https://robohash.org/${id}?set=set4&size=180x180`
				}
				alt={`cat ${name}`}
			/>
			<CardName>{name}</CardName>
			<CardAddress>{`${address.street}, ${address.suite}`}</CardAddress>
		</CardContainer>
	);
};

export default Card;
