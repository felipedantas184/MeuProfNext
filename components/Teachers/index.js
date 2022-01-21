import Link from "next/link";
import Image from "next/image";
import { Button, SmallButton } from "../ButtonElement";
import { SmallButtonTransparent } from "../ButtonTransparentElement";
import { BtnWrap, ExtLink, Heading, ImgWrap, Spinner, SubjectBlock, SubjectName, SubjectWpr, Subtitle, TeachersBar, TeachersCard, TeachersColumn1, TeachersColumn2, TeachersContainer, TeachersDescription, TeachersImg, TeachersName, TeachersRow, TeachersSubject, TeachersTextWrapper, TeachersWrapper, TextWrapper, Warning } from "./TeachersStyles";
import { TeachersList, SubjectsList } from "./TeachersData";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { ButtonInternalLink, ButtonWrapper } from "../UsefulComponents";

const Teachers = () => {
	const [selectedSubject, setSelectedSubject] = useState('')
	const [selectedSubjectUrl, setSelectedSubjectUrl] = useState('')

	console.log(selectedSubject)
	
	return ( 
		<TeachersContainer id="teachers">
			<TeachersWrapper>
				<TeachersRow>
					<TeachersColumn1>
						<TextWrapper>
							<Heading>Professores</Heading>
							<Subtitle>Escolha a matéria e conheça nossa super equipe de professores!</Subtitle>
							<SubjectWpr>
								{SubjectsList.map((subject) => {
									return(
										<div key={subject.id}>
										<input type="radio" className="inputChoice" name="subjectChoice" id={subject.id} />

										<SubjectBlock className="block"
											onClick={() => {setSelectedSubject(subject.name); setSelectedSubjectUrl(subject.urlName)}}
											htmlFor={subject.id}
										>
											{subject.icon}
											<SubjectName>{subject.name}</SubjectName>
										</SubjectBlock>
										</div>
									)
								})}
							</SubjectWpr>
						</TextWrapper>
					</TeachersColumn1>
					<TeachersColumn2>
						{(!selectedSubject) && (
							<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 32}} >
							<Spinner size={32} color="#C4C4C4" />
							<Warning>Escolha uma matéria primeiro para conhecer os nossos professores!</Warning>
							</div>
						)}
						{TeachersList.filter(item => item.subject == selectedSubject ).slice(0, 3)
						.map((teacher) => {
							return (
								<TeachersCard key={teacher.id} >
									<TeachersImg>
										<Image src={teacher.photo} alt="" width={115} height={115} />
									</TeachersImg>
									<TeachersTextWrapper>
										<TeachersName>{teacher.name}</TeachersName>
										<TeachersSubject>{teacher.subject}</TeachersSubject>
										<TeachersBar />
										<TeachersDescription>{teacher.description}</TeachersDescription>
										<BtnWrap>
											<ExtLink href={`https://api.whatsapp.com/send?phone=${teacher.number}&text=Ol%C3%A1!%20Encontrei%20voc%C3%AA%20pelo%20MeuProf!%20`} target="blank" >
												<SmallButton>Marcar Aula</SmallButton>
											</ExtLink>
											<Link href={"/professores/" + teacher.slug} passHref >
												<SmallButtonTransparent>Perfil</SmallButtonTransparent>
											</Link>
										</BtnWrap>
									</TeachersTextWrapper>
								</TeachersCard>
							)
						})}
						{TeachersList.filter(item => item.secondary == selectedSubject ).slice(0, 1)
						.map((teacher) => {
							return (
								<TeachersCard key={teacher.id} >
									<TeachersImg>
										<Image src={teacher.photo} alt="" width={115} height={115} />
									</TeachersImg>
									<TeachersTextWrapper>
										<TeachersName>{teacher.name}</TeachersName>
										<TeachersSubject> {selectedSubject}</TeachersSubject>
										<TeachersBar />
										<TeachersDescription>{teacher.description}</TeachersDescription>
										<BtnWrap>
											<ExtLink href={`https://api.whatsapp.com/send?phone=${teacher.number}&text=Ol%C3%A1!%20Encontrei%20voc%C3%AA%20pelo%20MeuProf!%20`} target="blank" >
												<SmallButton>Marcar Aula</SmallButton>
											</ExtLink>
											<Link href={"/professores/" + teacher.slug} passHref >
												<SmallButtonTransparent>Perfil</SmallButtonTransparent>
											</Link>
										</BtnWrap>
									</TeachersTextWrapper>
								</TeachersCard>
							)
						})}
						{TeachersList.filter(item => item.third == selectedSubject).slice(0, 1)
						.map((teacher) => {
							return (
								<TeachersCard key={teacher.id} >
									<TeachersImg>
										<Image src={teacher.photo} alt="" width={115} height={115} />
									</TeachersImg>
									<TeachersTextWrapper>
										<TeachersName>{teacher.name}</TeachersName>
										<TeachersSubject> {selectedSubject}</TeachersSubject>
										<TeachersBar />
										<TeachersDescription>{teacher.description}</TeachersDescription>
										<BtnWrap>
											<ExtLink href={`https://api.whatsapp.com/send?phone=${teacher.number}&text=Ol%C3%A1!%20Encontrei%20voc%C3%AA%20pelo%20MeuProf!%20`} target="blank" >
												<SmallButton>Marcar Aula</SmallButton>
											</ExtLink>
											<Link href={"/professores/" + teacher.slug} passHref >
												<SmallButtonTransparent>Perfil</SmallButtonTransparent>
											</Link>
										</BtnWrap>
									</TeachersTextWrapper>
								</TeachersCard>
							)
						})}
						{(selectedSubject) && (
							<Link href={"/" + selectedSubjectUrl} passHref >
							<ButtonWrapper>
								<ButtonInternalLink dark='true'>Ver Todos  de {selectedSubject}</ButtonInternalLink>
							</ButtonWrapper>
							</Link>
						)}
					</TeachersColumn2>
				</TeachersRow>
				</TeachersWrapper>
		</TeachersContainer>
     );
}
 
export default Teachers;