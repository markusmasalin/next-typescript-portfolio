import { NextPage } from 'next'
import Image from 'next/image';
import styled from 'styled-components';
import { PersonalPhoto } from '../assets/index';

const PageContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    min-width: 400px;
    margin: 0 auto;
  }
  
`
const HalfScreenDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const JumboTextDiv = styled.div`
  font-size: 40px;
 
`




const Homepage :NextPage = () => {
  return (
    <PageContainer>
      <HalfScreenDiv>
        <JumboTextDiv>
          <p>Scrum Master</p>
          <p>Agile Coach</p>
          <p>Fullstack Developer</p>
        </JumboTextDiv>

      </HalfScreenDiv>
      <HalfScreenDiv>
        <Image src={PersonalPhoto} alt={''} />
      </HalfScreenDiv>

    </PageContainer>
  ) 
}

export default Homepage;
