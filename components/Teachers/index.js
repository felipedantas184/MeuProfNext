import Link from "next/link";
import Image from "next/image";
import { SmallButton } from "../ButtonElement";
import { SmallButtonTransparent } from "../ButtonTransparentElement";
import { BtnWrap, ExtLink, Heading, ImgWrap, SubjectBlock, SubjectName, SubjectWpr, Subtitle, TeachersBar, TeachersCard, TeachersColumn1, TeachersColumn2, TeachersContainer, TeachersDescription, TeachersImg, TeachersName, TeachersRow, TeachersSubject, TeachersTextWrapper, TeachersWrapper, TextWrapper } from "./TeachersStyles";
import { TeachersList, SubjectsList } from "./TeachersData";
import { useState } from "react";

const Teachers = () => {
	const [selectedSubject, setSelectedSubject] = useState('')

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
											onClick={() => setSelectedSubject(subject.name)}
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
						{TeachersList.filter(item => item.subject == selectedSubject )
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
												<SmallButton>Conversar</SmallButton>
											</ExtLink>
											<Link href={"/professores/" + teacher.slug} passHref >
												<SmallButtonTransparent>Conhecer</SmallButtonTransparent>
											</Link>
										</BtnWrap>
									</TeachersTextWrapper>
								</TeachersCard>
							)
						})}
					</TeachersColumn2>
				</TeachersRow>
				</TeachersWrapper>
		</TeachersContainer>
     );
}
 
export default Teachers;