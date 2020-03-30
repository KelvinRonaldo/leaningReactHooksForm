import React from 'react';
import { Title, TitleSmall } from './styles.js'; // IMPORT DOS COMPONENTS ESTILIZADOS


function StyledComponents() {
	return (
		<div>
			<Title font-size={20}> {/* DEFININDO PROPRIEDADE DE ESTILO DO ELEMENTO QUE SERÁ ACESSADA NO PROPS DO COMPONENT */}
				Ola Marilene!
				<span>texto menor</span>
			</Title>

			<TitleSmall> {/* COMPONENT QUE HERDA ESTILOS DO OUTRO COMPONENT */}
				Menor
			</TitleSmall>
		</div>
	);
}

export default StyledComponents;
