import React from 'react';
import Layout from '../Layout/Layout';
import Head from '../Layout/Head/Head';
import Header from '../Header/Header';

// MDX Fragments
import Index from '../../content/code/Index.mdx';

const List = ({ title }) => (
  <Layout>
    <Head title="Code" />
    <Header />
    <main>
      <Index />
    </main>
  </Layout>
);

export default List;
