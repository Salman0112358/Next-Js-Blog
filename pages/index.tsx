import type { NextPage } from "next";
import Head from "next/head";

const posts = [
  { title: "React Testing", excerpt: "Learn React testing" },

  {
    title: "React with Tailwind",
    excerpt: "Learn react with tailwind",
  },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <div key={index}>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1"></div>
        <div className="lg:sticky relative top-8">
          

        </div>
      </div>
    </div>
  );
};

export default Home;
