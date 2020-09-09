import css from "./content.module.scss";

export default function Content({ children }) {
  return <main className={css.container}>{children}</main>;
}
