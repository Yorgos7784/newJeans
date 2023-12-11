import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Head>
        <title>뉴진스</title>
        <meta name="description" content="오늘도 빡코딩" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
