import { builder } from "@builder.io/react";
import { RenderBuilderContent } from "../../components/builder";
import Layout from "@/components/layout";

export default function Page({ content, menu }: any) {
  return (
    <Layout menu={menu}>
      <RenderBuilderContent content={content} />
    </Layout>
  );
}

export async function getStaticProps({ params }: any) {
  const page = params.page;

  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (page.join("/") || ""),
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

export async function getStaticPaths() {
  const allPages = await builder.getAll("page", {
    options: { noTargeting: true },
  });

  return {
    paths:
      allPages
        .filter((x) => x.data!.url != "/") //remove home page
        .map((page) => page.data!.url) || [],
    fallback: true,
  };
}
