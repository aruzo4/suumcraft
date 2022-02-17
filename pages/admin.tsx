import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import style from "../styles/admin.module.scss";

const Admin: NextPage = () => {
  const [token, setToken] = useState("");
  const [question, setQuestion] = useState("");
  const [answear, setAnswear] = useState("");
  const [status, setStatus] = useState("");

  const tokenHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setToken(e.currentTarget.value);
  };
  const questionHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setQuestion(e.currentTarget.value);
  };
  const answearHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setAnswear(e.currentTarget.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .post(`${origin}/api/questions`, { token, question, answear })
      .then(() => setStatus("Added Question"))
      .catch(() => setStatus("Invalid Request"));
  };

  return (
    <section className={style.admin}>
      <Head>
        <title>SuumCraft | Admin</title>
      </Head>

      <form onSubmit={submitHandler}>
        <h1>Add question to FAQ</h1>
        <h2>{status}</h2>
        <label>Token</label>
        <input value={token} onChange={tokenHandler} />
        <label>Question</label>
        <input value={question} onChange={questionHandler} />
        <label>Answear</label>
        <input value={answear} onChange={answearHandler} />
        <button>Add Question</button>
      </form>
    </section>
  );
};

export default Admin;
