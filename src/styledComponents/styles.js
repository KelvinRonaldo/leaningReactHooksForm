import styled from 'styled-components';

/* ESTILIZAÇÃO DE COMPONENT DE H1 */
export const Title = styled.h1`
	color: #ff0000;
	font-size: ${props => `${props.fontSize}px`};
	background-color: #0000ff;
	
	/* ESTILIZAÇÃO SPANS QUE ESTÃO DENTRO DO COMPONENT TITLE */
	span{
		font-size: 12px;
	}
`;
 
 
 /* ESTILIZAÇÃO DE COMPONENT HERDANDO PROPRIEDADES DE TITLE */
export const TitleSmall = styled(Title)`
	color: #00ff00;
	font-size: 16px;
`;