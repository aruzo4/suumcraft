import Image from "next/image";
import { PlayersList } from "../../pages/index";
import style from "./onlinePlayers.module.scss";

const OnlinePlayers = (props: { playersList: PlayersList }) => {
  const playersList = props.playersList.map((player) => (
    <div key={player.id} className={style.player}>
      <Image
        className={style.avatar}
        width={40}
        height={40}
        alt="avatar"
        src={`https://mc-heads.net/avatar/${player.id}`}
      />
      <span>{player.name}</span>
    </div>
  ));

  return (
    <section className={style["online-players"]}>
      <h1>Online Players</h1>
      <div className={style.players}>{playersList}</div>
    </section>
  );
};

export default OnlinePlayers;
