import Layout from '@/components/Layout';
import { getAllPostIds, getPostData } from '@/lib/posts';
// eslint-disable-next-line import/no-extraneous-dependencies
import Markdown from 'markdown-to-jsx';

export async function getStaticPaths(): Promise<{
  paths: {
    params: {
      id: string;
    };
  }[];
  fallback: boolean;
}> {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any): Promise<{
  props: {
    postData: {
      id: string;
      contentHtml: string;
      title: string;
      date: string;
    };
  };
}> {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

interface SinglePostProps {
  postData: {
    id: string;
    contentHtml: string;
    title: string;
    date: string;
  };
}

export default function SinglePost({ postData }: SinglePostProps): JSX.Element {
  return (
    <Layout home={false}>
      <h2 className="text-3xl text-center font-bold">{postData.title}</h2>
      <p className="text-sm text-slate-500"> {postData.date}</p>

      <Markdown className="prose md:prose-lg lg:prose-xl">
        {postData.contentHtml}
      </Markdown>
    </Layout>
  );
}
