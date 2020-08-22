import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default function Page({ children, title }) {
  return (
    <>
      <Header>{title}</Header>
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
