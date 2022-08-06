import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";

// This data prop is coming from the GraphQL query response object
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        // we add the article semantic tag for blog posts
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

// To pull data into a page component, use a graphQL allFile page query.
// To pull the content of the pages, we use MDX.
// By adding the transformer mdx plugin, we can now extract the contents of the blog post and not just the name, using the allMdxpage query.
export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
