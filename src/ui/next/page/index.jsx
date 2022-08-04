import Head from "next/head";

export default function Page({
  children,
  title,
  description,
  canonical,
  image = "/images/cards/twitter.png",
  noindex = false,
}) {
  const defaultTitle = "Hello world and happy hacking!";
  const defaultDescription = "This is the homepage for the nextjs starter kit.";
  const domain = "https://devmentor.live";
  return (
    <>
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        {canonical && (
          <>
            <meta property="og:url" content={`${domain}/${canonical}`} />
            <link rel="canonical" href={`${domain}/${canonical}`} />
          </>
        )}
        {}

        {noindex && <meta name="robots" content="noindex" />}

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="twitter:card" content={"summary"} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@devmentorlive" />
        <meta name="twitter:creator" content="@devmentorlive" />
        <meta name="twitter:title" content={title || defaultTitle} />
        <meta name="og:title" content={title || defaultTitle} />
        <meta
          name="twitter:description"
          content={description || defaultDescription}
        />
        <meta
          property="og:description"
          content={description || defaultDescription}
        />

        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_HOST}/cards/twitter.png`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HOST}/cards/og.png`}
        />
      </Head>

      {children}
    </>
  );
}
