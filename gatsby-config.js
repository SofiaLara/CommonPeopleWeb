// This is the gatsby configuration file, where we can add all our third-party plugins.
// The file system plugin, takes care of the blog posts, by adding allthe files in the specified folder in the path.
// The name option in the configuration object gets set to the sourceInstanceName field for each file. This comes in handy when you want to source files from multiple folders.
// By giving each folder a different name option, you can build GraphQL queries that filter down to only a particular folder.

// Data in Gatsby’s GraphQL data layer is stored in nodes.
// Each source plugin creates a different type of node with different fields.

// gatsby-plugin-mdx is a transformer plugin that lets you use MDX in your site.
// With MDX, you can create text content with Markdown formatting and embedded React components.
module.exports = {
  siteMetadata: {
    title: `Common People`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
