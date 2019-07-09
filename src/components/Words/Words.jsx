import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../Layout/Layout';
import Head from '../Layout/Head/Head';
import Header from '../Header/Header';
import Item from './Item/Item';
import WithLink from '../../hoc/WithLink';

const Words = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fields: { slug: { regex: "/^words/" } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "dddd Do MMMM, YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Head title="Words" />
        <Header />
        <main>
          <h1>Words</h1>
          {data.allMarkdownRemark.edges.map(item => (
            <WithLink href={item.node.fields.slug} key={item.node.fields.slug}>
              <Item title={item.node.frontmatter.title} date={item.node.frontmatter.date} />
            </WithLink>
          ))}
        </main>
      </Layout>
    )}
  />
);

export default Words;
