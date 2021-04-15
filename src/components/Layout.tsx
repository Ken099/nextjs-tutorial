import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import { SContainerBase, SIcon } from "../styles/module";

const name = "Ken Tsuchiya";
export const siteTitle = "Next.js Sample Website";

export const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) => {
  return (
    <SContainer>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <>
            <img src="/images/profile.jpg" alt={name} />
            <h1>{name} SS</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img src="/images/profile.jpg" alt={name} />
              </a>
            </Link>
            <h2>{name} KK</h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </SContainer>
  );
};

const SContainer = styled.div`
  ${SContainerBase}
  background-color: #f8f8f8;
`;
