import React, { useState } from "react";
import { styled } from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import SendingMailToastMessage from "../ToastMessages/SendingMailToastMessage";
import SendingFailedToastMessage from "../ToastMessages/SendingFailedToastMessage";
import NotARobotToastMessage from "../ToastMessages/NotARobotToastMessage";

export default function ContactPage({ className }) {
  const [capture, setCapture] = useState("");
  const [sendingSuccessful, setSendingSuccessful] = useState(false);
  const [sendingFailed, setSendingFailed] = useState(false);
  const [notARobotConfirmed, setNotARobotConfirmed] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!capture || capture === null || "") {
      setNotARobotConfirmed(true);
      setTimeout(() => {
        setNotARobotConfirmed(false);
      }, 9000); // after 9 seconds the animation with changing the background and the context will be removed
      return;
    }

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch("/api/contact", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSendingSuccessful(true);
      setTimeout(() => {
        setSendingSuccessful(false);
      }, 9000);
    } else {
      setSendingFailed(true);
      setTimeout(() => {
        setSendingFailed(false);
      }, 9000);
    }

    event.target.reset();
  }

  return (
    <div className={className}>
      {/* add a div with the prop className to style the ContactPage in the index.js */}
      <StyledH1 id="contact"> Kontakt</StyledH1>
      {sendingSuccessful && <SendingMailToastMessage />}
      {sendingFailed && <SendingFailedToastMessage />}
      {notARobotConfirmed && <NotARobotToastMessage />}
      <Styledform onSubmit={handleSubmit}>
        <StyledNameInputWrapper>
          <Styledlabel id="name">Name*</Styledlabel>
          <Styledinput
            type="text"
            name="name"
            placeholder="Max Mustermann"
            required
          />
        </StyledNameInputWrapper>
        <StyledMailInputWrapper>
          <Styledlabel id="email">E-Mail*</Styledlabel>
          <Styledinput
            type="email"
            name="email"
            placeholder="max.mustermann@mustermannmail.de"
            required
          />
        </StyledMailInputWrapper>
        <StyledInquiryWrapper>
          <Styledlabel>Anfrageart</Styledlabel>
          <Styledselect
            name="requestType"
            defaultValue="-- Wähle eine Option --">
            <option disabled value="-- Wähle eine Option --">
              -- Wähle eine Option --
            </option>
            <option value="anfrage">Website</option>
            <option value="feedback">Applikation</option>
            <option value="jobrequest">Jobangebot</option>
            <option value="sonstiges">Sonstiges</option>
          </Styledselect>
        </StyledInquiryWrapper>
        <StyledBudgetWrapper>
          <Styledlabel id="budget">Budget</Styledlabel>
          <Styledselect name="budget" defaultValue="-- Wähle eine Option --">
            <option disabled value="-- Wähle eine Option --">
              -- Wähle eine Option --
            </option>
            <option value="unter 200 EUR">unter 200€</option>
            <option value="200 - 500 EUR">200€ - 500€ </option>
            <option value="500 - 1000 EUR">500€ - 1.000€ </option>
            <option value="1000 - 2000 EUR">1.000€ - 2.000€</option>
            <option value="2000 - 5000 EUR">2.000€ - 5.000€</option>
            <option value="über 5000 EUR">über 5.000€ </option>
          </Styledselect>
        </StyledBudgetWrapper>
        <StyledTextAreaWrapper>
          <Styledlabel id="message">Nachricht*</Styledlabel>
          <Styledtextarea
            name="message"
            placeholder="Deine Nachricht"
            required
          />
        </StyledTextAreaWrapper>
        <StyledRecaptchaWrapper>
          <ReCAPTCHA //to prevent spam from bots and other malicious users
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={(value) => setCapture(value)}
          />
        </StyledRecaptchaWrapper>
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

  @media (max-width: 1024px) {
    width: 40%;
    font-size: 35px;
  }
`;

const Styledform = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
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

//wrapper for each input and label
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
  grid-area: 4 / 1 / 6 / 3;
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
  @media (max-width: 500px) {
    margin-left: 1rem;
  }
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
  @media (max-width: 500px) {
    max-width: 70%;
    margin: auto;
  }
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
  @media (max-width: 500px) {
    max-width: 70%;
    margin: auto;
  }
`;

const Styledtextarea = styled.textarea`
  width: 48rem;
  height: 10rem;
  border-radius: 15px;
  border: none;
  padding: 1rem;
  -webkit-box-shadow: var(--box-shadow-main);
  box-shadow: var(--box-shadow-main);
  @media (max-width: 500px) {
    max-width: 70%;
    margin: auto;
  }

  @media (max-width: 1024px) {
    width: 22rem;
  }
`;

const StyledRecaptchaWrapper = styled.div`
  grid-area: 4 / 1 / 5 / 3;
  justify-self: center;
  margin: auto;
  margin-top: 2rem;
`;
