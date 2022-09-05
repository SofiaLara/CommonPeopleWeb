// You’ve now used Gatsby’s File System Route API to create pages from nodes in the data layer.
// Gatsby’s File System Route API lets you dynamically create new pages from data layer nodes by naming your files with a special syntax.
// File System Routes only work on files in the src/pages directory (or subdirectories).
// To create a new collection route, you name your file {nodeType.field}.js, where nodeType is the type of node you want to create pages from, and field is the data field from that node type that you want to use in the URL for that page.
// Query variables let you pass in different data values to the same GraphQL query. They can be combined with field arguments to get back data only about a specific node.
// Query variables can only be used in page queries.

import * as React from "react";
import { graphql, Link } from "gatsby";
// MDXRenderer is a component included in the gatsby-plugin-mdx plugin that you can use to render the contents of a .mdx file.
// So we can render the body of the post
import { MDXRenderer } from "gatsby-plugin-mdx";
// Use the GatsbyImage component if the image source changes for different instances of your component (like if it gets passed in as a prop)
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article>
        <p>{data.mdx.frontmatter.date}</p>
        <h1>{data.mdx.frontmatter.title}</h1>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Link to="/blog">Back to Blog</Link>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPost;
