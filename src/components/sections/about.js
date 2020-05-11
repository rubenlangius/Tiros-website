import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const About = () => (
  <Section id="about">
    <StyledContainer>
      <Subtitle>About</Subtitle>
      <SectionTitle>Combine experience and observations</SectionTitle>
      <AboutStepItem>
        <AboutStepTitle>The fisherman</AboutStepTitle>
        <AboutStepText>
          Long before the use of global weather forecast models, weather
          forecasting was based on observation and experience. Imagin a
          fisherman centuries ago, who needs to decide whether or not to sail
          out.
        </AboutStepText>
      </AboutStepItem>
      <AboutStepItem>
        <AboutStepTitle>Local knowledge</AboutStepTitle>
        <AboutStepText>
          Local knowledge is vital, as weather patterns in two locations that
          are a few 100kms apart can differ greatly. If our imaginative
          fisherman decides to say in port if he forecasts a storm, he will lose
          potential revenue, but sailing out could results in major damage to
          his posessions, or worse.
        </AboutStepText>{" "}
      </AboutStepItem>

      <AboutStepItem>
        <AboutStepTitle>Deep learning</AboutStepTitle>
        <AboutStepText>
          Now, it is possible to use deep learning, to create an improved
          weather model trained using deep learning for a single location. Local
          knowledge created by combining experience and observation in a deep
          learning model.
        </AboutStepText>{" "}
      </AboutStepItem>
    </StyledContainer>
  </Section>
)

export default About

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const AboutStepItem = styled.div`
  max-width: 670px;
  margin: 0px auto;
  padding-top: 6px;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 0 64px;
  }
`

const AboutStepTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const AboutStepText = styled.p`
  text-align: center;
`
