import css from "../css/content.module.css";

export default function Content({ children }) {
  return <main className={css.container}>{children}</main>;
}
