import style from "./faq.module.scss";
import Wave from "../../public/images/wave.svg";
import BigWave from "../../public/images/bigWave.svg";
import { Questions } from "../../pages";

const FAQ = (props: { questions: Questions }) => {
  const questionsList = props.questions.map((question) => (
    <div key={question.id} className={style["question-answear"]}>
      <div className={style.question}>
        <div />
        <h1>Q.</h1>
        <p>{question.question}</p>
      </div>
      <div className={style.answear}>
        <div />
        <h1>A.</h1>
        <p>{question.answear}</p>
      </div>
    </div>
  ));

  return (
    <section className={style.faq}>
      <Wave className={style.wave} />
      <BigWave className={style.wave} />

      <h1 className={style.title}>FAQ</h1>
      <div className={style.questions}>{questionsList}</div>
    </section>
  );
};

export default FAQ;
