import styled from 'styled-components';

export const CardListContainer = styled.div`
	max-width: 90vw;
	margin: 0 auto;
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;
