import style from "./welcome.module.scss";
import Wave from "../../public/images/wave.svg";
import BigWave from "../../public/images/bigWave.svg";
import Discord from "../../public/images/discord.svg";
import Controller from "../../public/images/controller.svg";

const Welcome = (props: { playersCounter: number }) => {
  const copyServerIp = () => {
    navigator.clipboard.writeText("mc.suumcraft.com");
  };

  return (
    <section className={style.welcome} id="welcome">
      <Wave className={style.wave} />
      <BigWave className={style.wave} />

      <div className={style.content}>
        <div className={style["server-status"]}>
          <h2>MC.SUUMCRAFT.COM</h2>
          <div />
          <span>
            <strong>{props.playersCounter}</strong> Players Online
          </span>
        </div>
        <h1 className={style.title}>Minecraft Servers Network.</h1>
        <p className={style.description}>
          SuumCraft is network of servers with Survival, Hub, KitPvP, BedWars,
          SkyWars, Battle Royale and many more!
        </p>
        <div className={style.buttons}>
          <button className={style.play} onClick={copyServerIp}>
            Play Now <Controller />
          </button>
          <a
            href="https://discord.gg/eJaCVvMs5A"
            target="_blank"
            rel="noreferrer"
          >
            <button className={style.discord}>
              Discord <Discord />
            </button>
          </a>
        </div>
      </div>

      <div className={style.spawn} />
    </section>
  );
};

export default Welcome;
