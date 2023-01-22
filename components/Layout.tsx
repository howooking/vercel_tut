import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

interface FirstPostProps {
  children: React.ReactNode;
  home: boolean;
}

export const siteTitle = 'Next.js Sample Website';
const name = 'howoo';

export default function Layout({
  children,
  home,
}: FirstPostProps): JSX.Element {
  return (
    <div className="max-w-2xl mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="bg-yellow-100">
        <Image
          priority // lazy load하지 않게 된다.
          src="/images/profile.png"
          height={100}
          width={100}
          alt="profile"
          className="rounded-full mx-auto"
        />
        <h1 className="text-4xl font-bold text-center uppercase hover:underline cursor-pointer">
          <Link href="/">{name}</Link>
        </h1>
      </header>
      <main className="bg-red-100">{children}</main>
      {!home && (
        <div className="bg-green-100 text-blue-600 hover:underline">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
