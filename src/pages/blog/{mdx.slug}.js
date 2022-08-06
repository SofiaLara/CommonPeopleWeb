// You’ve now used Gatsby’s File System Route API to create pages from nodes in the data layer.

import * as React from "react";
import { graphql } from "gatsby";
// MDXRenderer is a component included in the gatsby-plugin-mdx plugin that you can use to render the contents of a .mdx file.
// So we can render the body of the post
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
