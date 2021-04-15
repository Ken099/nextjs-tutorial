import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import { getSortedPostsData } from "../../lib/posts";
import { Layout, siteTitle } from "../components/Layout";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: { date: string; title: string; id: string }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <STitle>Blog</STitle>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const STitle = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;
