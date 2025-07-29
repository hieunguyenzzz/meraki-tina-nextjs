import Layout from '@/components/layout/layout';
import client from '@/tina/__generated__/client';
import PostsClientPage from './client-page';

export const revalidate = 300;

export default async function PostsPage() {
  // Simplified for now - just get posts without pagination
  const posts = await client.queries.postConnection();

  return (
    <Layout rawPageData={posts.data}>
      <PostsClientPage {...posts} />
    </Layout>
  );
}
