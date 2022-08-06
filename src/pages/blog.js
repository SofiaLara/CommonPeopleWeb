import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// This data prop is coming from the GraphQL query response object
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

// To pull data into a page component, use a graphQL page query.
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
