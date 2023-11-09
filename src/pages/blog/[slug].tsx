import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { builder, useIsPreviewing } from "@builder.io/react";
import "@builder.io/widgets";
import React from "react";

// Post model created to display a specific blog post.
// read more at: https://www.builder.io/blog/creating-blog
export default function Post({ post }: any) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();
  if (!router.isFallback && !post && !isPreviewing) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.data.title} | Next.js Blog Example with Builder.io
                </title>
                <meta property="og:image" content={post.data.image} />
              </Head>
              {post.data.author?.value && (
                <PostHeader
                  title={post.data.title}
                  coverImage={post.data.image}
                  author={post.data.author.value?.data}
                />
              )}
              <p>{post.data.intro}</p>
              <PostBody content={post} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }: any) {
  const slug = params.slug;

  /*
    usage of builder sdks to fetch data
    more examples at https://github.com/BuilderIO/builder/tree/main/packages/core  */

  let post =
    (await builder
      .get("post", {
        // Content API params are detailed in this doc
        // https://www.builder.io/c/docs/query-api
        includeRefs: true,
        query: {
          "data.slug": slug,
        },
      })
      .toPromise()) || null;

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await builder.getAll("post", {
    options: { noTargeting: true },
  });
  return {
    paths: allPosts?.map((post) => `/blog/${post.data!.slug}`) || [],
    fallback: true,
  };
}
