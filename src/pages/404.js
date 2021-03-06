import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>Sorry not found</h1>
    </Layout>
  );
};

export default NotFoundPage;
