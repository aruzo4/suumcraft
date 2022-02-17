import type { GetServerSideProps, NextPage } from "next";
import prisma from "../lib/prisma";
import Head from "next/head";
import axios from "axios";
import Welcome from "../components/home/Welcome";
import FAQ from "../components/home/FAQ";
import OnlinePlayers from "../components/home/OnlinePlayers";
import Footer from "../components/home/Footer";

export type Questions = {
  id: string;
  question: string;
  answear: string;
}[];

export type PlayersList = {
  name: string;
  id: string;
}[];

interface Props {
  playersCounter: number;
  playersList: PlayersList;
  questions: Questions;
}

const Home: NextPage<Props> = ({ playersCounter, playersList, questions }) => {
  return (
    <div>
      <Head>
        <title>SuumCraft | Home</title>
      </Head>

      <Welcome playersCounter={playersCounter} />
      <OnlinePlayers playersList={playersList} />
      <FAQ questions={questions} />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { playersCounter, playersList } = await axios
    .get("https://mcapi.us/server/status?ip=utopiamc.pl")
    .then((res) => ({
      playersCounter: res.data.players.now,
      playersList: res.data.players.sample,
    }));

  const questions = await prisma.question.findMany();

  return { props: { playersCounter, playersList, questions } };
};

export default Home;
