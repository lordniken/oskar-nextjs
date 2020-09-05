import Header from "./header";
import Content from "./content";

export default function Page({ children, title }) {
  return (
    <>
      <Header>{title}</Header>
      <Content>{children}</Content>
    </>
  );
}
