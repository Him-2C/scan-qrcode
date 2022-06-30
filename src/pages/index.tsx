import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Container = styled.div({
  padding: "0 32px",
});

const Main = styled.main({
  minHeight: "100vh",
  padding: "64px 0",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled.h1({
  fontSize: "32px",
});

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>Hello QR Code APP</Title>
      </Main>
    </Container>
  );
};

export default Home;
