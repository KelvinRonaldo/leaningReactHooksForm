import React from 'react';
import { useForm } from 'react-hook-form';
import { FiMail, FiKey } from 'react-icons/fi';
import { MainBox, Image } from './styles';
import githubIco from '../../assets/w_github.png'
import instaIco from '../../assets/w_insta.png'

function HooksForm() {
	const {register, handleSubmit, errors} = useForm();

	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<MainBox className="form-container">
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<FiMail size={24} color='#25b4c4'/>
					<input placeholder="E-mail" name="email" ref={register({
						required: "Email obrigatório", 
							minLength: {value: 5, message: "E-mail muito curto!"},
							pattern: {
								value: /^[0-9a-zA-Z_\-.]+@[a-z]{2,}(\.[a-z]+)+/, 
								message: "E-mail inválido"
							}
						})}
					/>
				</div>					
				<span className="error">
					{errors.email && <span>{errors.email.message}</span>}
				</span>

				<div>
					<FiKey size={24} color='#25b4c4'/>
					<input 
						type="password" 
						placeholder="Senha" 
						name="password" 
						ref={register({
							required: "Senha obrigatória", 
							minLength: {value: 8, message: "Senha muito curta!"}	
						})}
					/>
				</div>
				<span className="error">
					{errors.password && <span>{errors.password.message}</span>}
				</span>
				<button className="send" type="submit">Enviar</button>

				<div>
					<a target="blank" href='https://github.com/KelvinRonaldo/leaningReactHooksForm'>
						<img src={githubIco} alt="GitHub - KelvinRonaldo"/>
					</a>
					<a target="blank" href='https://www.instagram.com/kelvinrferreira/'>
						<img src={instaIco} alt="Instagram - @kelvinrferreira"/>
					</a>
				</div>

			</form>
		</MainBox>
	);
}

export default HooksForm;
