import { FaBrain, FaDollarSign, FaGraduationCap, FaLayerGroup, FaRocket } from "react-icons/fa";

export const PerksList = [
	{
		id: 1,
		icon: <FaLayerGroup size={50} color="#BB6BD9" />,
		title: 'Múltiplas Disciplinas',
		description: 'Nós oferecemos professores de várias disciplinas para te ajudar o máximo possível.'
	},
	{
		id: 2,
		icon: <FaGraduationCap size={50} color="#BB6BD9" />,
		title: 'Professores Experientes',
		description: 'Nossos professores já possuem experiência com aulas particulares e sabem como te ajudar.'
	},
	{
		id: 3,
		icon: <FaRocket size={50} color="#BB6BD9" />,
		title: 'Atendimento Rápido',
		description: 'Após escolher seu professor ou plano, você será encaminhado para confirmar a contratação.'
	},
	{
		id: 4,
		icon: <FaBrain size={50} color="#BB6BD9" />,
		title: 'Muito Conhecimento',
		description: 'Nossa equipe possui muito conhecimento pronto para ser compartilhado com os alunos.'
	},
    {
		id: 5,
		icon: <FaDollarSign size={50} color="#BB6BD9" />,
		title: 'Planos Acessíveis',
		description: 'Possuímos diferentes planos para que você escolha o que mais se adeque à sua necessidade.'
	}
];