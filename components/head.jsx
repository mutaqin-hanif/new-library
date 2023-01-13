import Head from "next/head";

export default function HeadMeta({ title }) {
  return (
    <Head>
      <link
        href="https://library.gunadarma.ac.id/deposit-system/favicon-32x32.png"
        rel="icon"
        type="image/x-png"
      />
      <title>{title} | Deposit System Gunadarma Library</title>
    </Head>
  );
}
