import styled from "styled-components";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";

import background from "./assets/img/bg.jpeg";
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: ${`url(${background})`};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contacts />
    </Container>
  );
}
