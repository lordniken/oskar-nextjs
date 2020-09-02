import Header from "./Header";
import Content from "./Content";

export default function Page({ children, title }) {
  return (
    <>
      <Header>{title}</Header>
      <Content>{children}</Content>
    </>
  );
}
