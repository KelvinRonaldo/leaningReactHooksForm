import styled from 'styled-components';

const boxColor = '#0e2140';
const errorColor = '#f22e2e';

export const MainBox = styled.div`
	width: 500px;
	height: 360px;
	background-color: ${boxColor};
	margin: 20vh auto;
	border-radius: 8px;
	padding-top: 15px;
	
	form{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	
	div{
		width: 100%;
		height: 65px;
		margin-top: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		/* background-color: #ffffff; */
	}

	div svg{
		margin-right: 5px;
	}

	input{
		width: 380px;
		height: 60px;
		border: none;
		border-bottom: 1px solid #3de3dd;
		background-color: transparent;
		padding-left: 5px;
		transition: all .2s;
		
		font-weight: 100;
		font-size: 24px;
		color: #fefefe;
		font-family: Roboto;
	}
	input::placeholder{
		color: #ababab;
	}
	input:hover{
		border-bottom: 2px solid #3de3dd;
		background-color: #0e203b;
	}

	span{
		width: 100%;
		height: 16px;
		color: ${errorColor};
		padding-left: 37px;
		margin-top: 3px;
		/* background-color: #ffffff; */
	}

	button.send{
		width: 250px;
		height: 50px;
		border-radius: 2px;
		border: none;
		background-color: #25b4c4;
		margin-top: 25px; 
		transition: all .2s;

		color: ${boxColor};
		font-family: Raleway;
		font-weight: 600;
		font-size: 20px;
	}
	
	button.send:hover{
		filter: brightness(130%);
	}

	img {
		margin: 40px 10px 10px 0;
		max-width: 130px;
	}

`;