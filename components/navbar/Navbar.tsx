import Image from "next/image";
import style from "./navbar.module.scss";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link href="/">
        <a>
          <Image
            className={style.logo}
            width={70}
            height={70}
            src={logo}
            alt="logo"
          />
        </a>
      </Link>
      <div className={style.menu}>
        <a
          href="https://www.suumcraft.com/shop"
          target="_blank"
          rel="noreferrer"
        >
          Store
        </a>
        <a
          href="http://178.63.66.182:8120/trade.html"
          target="_blank"
          rel="noreferrer"
        >
          Prices
        </a>
        <button>
          <a
            href="https://www.suumcraft.com/wiki"
            target="_blank"
            rel="noreferrer"
          >
            Wiki
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
