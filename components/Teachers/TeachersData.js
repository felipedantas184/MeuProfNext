import { FaAtom, FaDna, FaDraftingCompass, FaFlagUsa, FaGlobeAmericas, FaLandmark, FaPen, FaSquareRootAlt, FaUserAstronaut, FaVial } from "react-icons/fa";

export const TeachersList = [
	{
		id: 1,
		name: 'Felipe Dantas',
		slug: 'felipe-dantas',
		description: 'Estudante de Medicina UFPI, dou aulas particulares há dois anos',
		fullDescription: 'Olá! Eu me chamo Felipe e sou estudante do quarto período de Medicina pela UFPI. Dou aulas particulares há 2 anos, com ênfase nas disciplinas de exatas.',
		subject: 'Física',
		secondary: 'Química',
		third: 'Álgebra',
		number: '5586995185757',
		photo: '/FelipeMeuProf.jpg',
		subjects: {
			First: "Física",
			FirstUrl: "fisica",
			Second: "Química",
			SecondUrl: "quimica",
			Third: "Álgebra",
			ThirdUrl: "algebra"
		}
	},
	{
		id: 2,
		name: 'Nicole Dantas',
		slug: 'nicole-dantas',
		description: 'Aprovada em Odontologia na UniFacid e cursando na UniNovafapi.',
		fullDescription: 'Oi, me chamo Nicole Dantas! Fui aprovada em Odontologia na UniFacid e, atualmente, estou cursando na Uninovafapi. Posso te ajudar em redação, português, inglês e na área de humanas.',
		subject: 'História',
		secondary: 'Redação',
		third: 'Geografia',
		number: '5586994940808',
		photo: '/NicoleMeuProf.jpg',
		subjects: {
			First: "História",
			FirstUrl: "historia",
			Second: "Redação",
			SecondUrl: "redacao",
			Third: "Geografia",
			ThirdUrl: "geografia"
		}
	},
	{
		id: 3,
		name: 'Marcos Josué ',
		slug: 'marcos-josue',
		description: 'Aprovado em odontologia UFPI, atualmente curso medicina UNIFACID',
		fullDescription: 'Fala, pessoal! Eu me chamo Marcos Josué, curso medicina na UNIFACID. Tenho experiência com aulas particulares, principalmente biologia.',
		subject: 'Biologia',
		secondary: 'Química',
		third: null,
		number: '5586981314286',
		photo: '/JosueMeuProf.jpg',
		subjects: {
			First: "Biologia",
			FirstUrl: "biologia",
			Second: "Química",
			SecondUrl: "quimica",
			Third: null,
			ThirdUrl: null
		}
	},
	{
		id: 4,
		name: 'André Isac',
		slug: 'andre-isac',
		description: 'Aprovado em medicina na UFPI, certa experiência com aulas particulares.',
		fullDescription: 'Oii! Eu me chamo André Isac, fui aprovado em medicina na UFPI. Tenho certa experiência com aulas particulares, sobretudo em exatas.',
		subject: 'Álgebra',
		secondary: 'Geometria',
		third: 'Química',
		number: '5586988945476',
		photo: '/AndreMeuProf.jpg',
		subjects: {
			First: "Álgebra",
			FirstUrl: "algebra",
			Second: "Geometria",
			SecondUrl: "geometria",
			Third: "Química",
			ThirdUrl: "quimica"			
		}
	},
	{
		id: 5,
		name: 'Gabriel Soares',
		slug: 'gabriel-soares',
		description: 'Média de 810 pontos no ENEM e aprovado em Medicina na UFPI',
		fullDescription: 'Olá! Meu nome é Gabriel Soares! Sou ex-aluno do IDB e fui aprovado em medicina na UFPI com mais de 800 pontos no ENEM. Posso te ajudar em física, biologia, matemática e redação.',
		subject: 'Física',
		secondary: 'Biologia',
		third: null,
		number: '5586994390202',
		photo: '/GabrielMeuProf.jpg',
		subjects: {
			First: "Física",
			FirstUrl: "fisica",
			Second: "Biologia",
			SecondUrl: "biologia",
			Third: null,
			ThirdUrl: null
		}
	},
	{
		id: 6,
		name: 'João Gabriel',
		slug: 'joao-gabriel',
		description: 'Média de mais de 830 pontos no ENEM e aprovado em Medicina na UFPI',
		fullDescription: 'Oi, pessoal! Meu nome é João Gabriel! Estudei no IDB e fui aprovado em medicina na UFPI com média de 837 pontos no ENEM.',
		subject: 'Química',
		secondary: 'Fís.-Quím.',
		third: 'Álgebra',
		number: '5586998291232',
		photo: '/JoaoMeuProf.jpg',
		subjects: {
			First: "Química",
			FirstUrl: "quimica",
			Second: "Fís.-Quím.",
			SecondUrl: "fisico-quimica",
			Third: "Álgebra",
			ThirdUrl: "algebra"
		}
	},
	{
		id: 7,
		name: 'Letícia Matos',
		slug: 'leticia-matos',
		description: 'Aprovada em Odontologia UESPI e cursando na UNINOVAFAPI.',
		fullDescription: 'Oi, me chamo Letícia Matos! Fui aprovada em Odontologia na UESPI e, atualmente, estou cursando na UNINOVAFAPI. Posso te ajudar em redação e na área de humanas.',
		subject: 'Redação',
		secondary: 'Geografia',
		third: 'História',
		number: '5586988666903',
		photo: '/LeticiaMeuProf.jpg',
		subjects: {
			First: "Redação",
			FirstUrl: "redacao",
			Second: "Geografia",
			SecondUrl: "geografia",
			Third: "História",
			ThirdUrl: "historia"
		}
	},
	{
		id: 8,
		name: 'Francisco Gabriel',
		slug: 'francisco-gabriel',
		description: 'Ex-aluno do Dom Barreto e aprovado em medicina na UFPI em 2019',
		fullDescription: 'Me chamo Francisco Gabriel, sou aluno de medicina da UFPI e ex-aluno do Dom Barreto. Já sou professor particular desde 2019.',
		subject: 'Geometria',
		secondary: 'Álgebra',
		third: 'Fís.-Quím.',
		number: '5586998342230',
		photo: '/FranciscoMeuProf.jpg',
		subjects: {
			First: "Geometria",
			FirstUrl: "geometria",
			Second: "Álgebra",
			SecondUrl: "algebra",
			Third: "Fís.-Quím.",
			ThirdUrl: "fisico-quimica"
		}
	},
];

export const SubjectsList = [
	{
		id: 1,
		name: 'Álgebra',
		urlName: 'algebra',
		icon: <FaSquareRootAlt size={40} color="#F0EDEE" />,

	},
	{
		id: 2,
		name: 'Geometria',
		urlName: 'geometria',
		icon: <FaDraftingCompass size={40} color="#F0EDEE" />,

	},
	{
		id: 3,
		name: 'Física',
		urlName: 'fisica',
		icon: <FaUserAstronaut size={40} color="#F0EDEE" />,

	},
	{
		id: 4,
		name: 'Química',
		urlName: 'quimica',
		icon: <FaAtom size={40} color="#F0EDEE" />,

	},
	{
		id: 5,
		name: 'Fís.-Quím.',
		urlName: 'fisico-quimica',
		icon: <FaVial size={40} color="#F0EDEE" />,

	},
	{
		id: 6,
		name: 'Biologia',
		urlName: 'biologia',
		icon: <FaDna size={40} color="#F0EDEE" />,

	},
	{
		id: 7,
		name: 'História',
		urlName: 'historia',
		icon: <FaLandmark size={40} color="#F0EDEE" />,

	},
	{
		id: 8,
		name: 'Geografia',
		urlName: 'geografia',
		icon: <FaGlobeAmericas size={40} color="#F0EDEE" />,

	},
	{
		id: 9,
		name: 'Redação',
		urlName: 'redacao',
		icon: <FaPen size={40} color="#F0EDEE" />,

	},
]