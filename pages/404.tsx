import Head from "next/head";
import style from "../styles/page404.module.scss";

const Page404 = () => {
  return (
    <section className={style["page-404"]}>
      <Head>
        <title>SuumCraft | 404</title>
      </Head>

      <h1>404</h1>
      <p>The page you were looking for does not exist.</p>
    </section>
  );
};

export default Page404;
