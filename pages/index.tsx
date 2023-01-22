import Head from 'next/head';
import Layout, { siteTitle } from '@/components/Layout';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export interface Post {
  id: string;
  title: string;
  date: string;
}

export async function getStaticProps(): Promise<{
  props: {
    allPostsData: Post[];
  };
}> {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

interface HomeProps {
  allPostsData: Post[];
}

export default function Home({ allPostsData }: HomeProps): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2 className="text-2xl">
          Hi I am <span className="font-bold">Howoo</span>, Cutest cat in Korea.
        </h2>
        <p className="text-xl text-slate-500">
          you’ll be building a site like this on{' '}
          <a
            href="https://nextjs.org/learn"
            className="text-blue-600 hover:underline"
          >
            our Next.js tutorial
          </a>
          .
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Blog</h2>
        <ul>
          {allPostsData.map((post: Post) => (
            <li key={post.id}>
              <h4 className="text-blue-600 hover:underline cursor-pointer">
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </h4>
              <p className="text-slate-400 text-sm">{post.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
