import React from "react";
import styled from "styled-components";

export default function ContactPage({ className }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    event.target.reset();
  }

  return (
    <div className={className}>
      <StyledH1> Kontakt</StyledH1>

      <Styledform onSubmit={handleSubmit}>
        <StyledNameInputWrapper>
          <Styledlabel id="name">Name*</Styledlabel>
          <Styledinput type="text" name="name" placeholder="Max Mustermann" />
        </StyledNameInputWrapper>
        <StyledMailInputWrapper>
          <Styledlabel id="email">E-Mail*</Styledlabel>
          <Styledinput
            type="email"
            name="email"
            placeholder="max.mustermann@mustermannmail.de"
          />
        </StyledMailInputWrapper>
        <StyledInquiryWrapper>
          <Styledlabel>Anfrageart</Styledlabel>
          <Styledselect name="anfrageart">
            <StyledOption value="anfrage">Website</StyledOption>
            <StyledOption value="feedback">Applikation</StyledOption>
            <StyledOption value="sonstiges">Sonstiges</StyledOption>
          </Styledselect>
        </StyledInquiryWrapper>
        <StyledBudgetWrapper>
          <Styledlabel id="budget">Budget</Styledlabel>
          <Styledselect name="budget">
            <StyledOption value="unter 200 EUR">unter 200€</StyledOption>
            <StyledOption value="200 - 500 EUR">200€ - 500€ </StyledOption>
            <StyledOption value="500 - 1000 EUR">500€ - 1.000€ </StyledOption>
            <StyledOption value="1000 - 2000 EUR">
              1.000€ - 2.000€{" "}
            </StyledOption>
            <StyledOption value="2000 - 5000 EUR">
              2.000€ - 5.000€{" "}
            </StyledOption>
            <StyledOption value="über 5000 EUR">über 5.000€ </StyledOption>
          </Styledselect>
        </StyledBudgetWrapper>
        <StyledTextAreaWrapper>
          <Styledlabel id="message">Nachricht*</Styledlabel>
          <Styledtextarea name="message" placeholder="Deine Nachricht" />
        </StyledTextAreaWrapper>
        <StyledButton type="submit">Senden</StyledButton>
      </Styledform>
    </div>
  );
}

const StyledH1 = styled.h1`
  font-size: 45px;
  color: var(--primary-blue);
  text-align: center;
  border-bottom: 4px solid var(--secondary-yellow);
  width: 15%;
  margin: 6rem auto 0rem auto;
`;

const Styledform = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 0rem;
  max-width: 60rem;
  margin: auto;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;
  }
`;

//all sections for input and labels together
const StyledNameInputWrapper = styled.section`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: column;
  padding: auto;
  margin: auto;
  margin-bottom: 0rem;
`;
const StyledMailInputWrapper = styled.section`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: column;
  padding: auto;
  margin: auto;
  margin-bottom: 0rem;
`;
const StyledInquiryWrapper = styled.section`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  flex-direction: column;
  padding: auto;
  margin: auto;
`;
const StyledBudgetWrapper = styled.section`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: column;
  padding: auto;
  margin: auto;
`;
const StyledTextAreaWrapper = styled.section`
  grid-area: 3 / 1 / 4 / 3;
  display: flex;
  flex-direction: column;
  padding: auto;
  margin: auto;
`;

//single form elements
const StyledButton = styled.button`
  grid-area: 4 / 1 / 5 / 3;
  width: 8rem;
  height: 3rem;
  margin: auto;
  border-radius: 20px;
  border: none;
  background-color: var(--secondary-yellow);
  -webkit-box-shadow: var(--box-shadow-main);
  box-shadow: var(--box-shadow-main);
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: var(--primary-blue);
    color: white;
  }
`;

const Styledlabel = styled.label`
  color: var(--primary-blue);
  font-size: 14px;
  font-weight: 600;
  margin: 6px 6px;
`;

const Styledinput = styled.input`
  width: 22rem;
  height: 3rem;
  border-radius: 15px;
  border: none;
  padding: 1rem;
  cursor: text;
  -webkit-box-shadow: var(--box-shadow-main);
  box-shadow: var(--box-shadow-main);
`;

const Styledselect = styled.select`
  width: 22rem;
  height: 3rem;
  border-radius: 15px;
  border: none;
  padding: 1rem;
  background-color: white;
  cursor: pointer;

  -webkit-box-shadow: var(--box-shadow-main);
  box-shadow: var(--box-shadow-main);
`;

const Styledtextarea = styled.textarea`
  width: 48rem;
  height: 10rem;
  border-radius: 15px;
  border: none;
  padding: 1rem;
  -webkit-box-shadow: var(--box-shadow-main);
  box-shadow: var(--box-shadow-main);

  @media (max-width: 1024px) {
    width: 22rem;
  }
`;

const StyledOption = styled.option`
  height: 4rem;
`;
