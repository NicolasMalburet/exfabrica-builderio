import { builder } from "@builder.io/react";
import { RenderBuilderContent } from "../components/builder";
import Layout from "@/components/layout";

export default function Home({ content, menu }: any) {
  return (
    <>
      <Layout menu={menu}>
        <RenderBuilderContent content={content} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/",
      },
    })
    // Convert the result to a promise
    .toPromise();

  const menu = await builder.getAll("menu");
  return {
    props: {
      content,
      menu,
    },
  };
}
