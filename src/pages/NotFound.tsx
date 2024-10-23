import { DateTime } from "luxon";
import style from "./NotFound.module.css";
import { Link } from "react-router-dom";

const facts = [
  'Эта 404 страница была взята и "адаптирована" из проекта, который был отложен в долгий ящик – Icechattix.',
  "Мой GitHub профиль был создан 8 марта 2022 года.",
  "Я состою в команде LAF.",
  "aculaOne, то есть я, создатель FarySD.",
  "Этот сайт использует Vite для сборки.",
  `Сайт использует Luxon, а не MomentJS. Кстати, сегодня ${DateTime.now().toLocaleString()}.`,
  "Geva – это что-то на душевном.",
];
const forRand = { max: facts.length - 1, min: 0 };

export default function NotFound() {
  return (
    <div className={style.container}>
      <div className={style.frame}>
        <h1 className={style.display}>404</h1>
        <p className={style.hint}>
          <h2>Время фактов</h2>
          <span>
            {
              facts[
                Math.floor(
                  Math.random() * (forRand.max - forRand.min + 1) + forRand.min
                )
              ]
            }
          </span>
        </p>{" "}
        <Link className={style.link} to="/">
          Хорошо, давай домой
        </Link>
      </div>
    </div>
  );
}
