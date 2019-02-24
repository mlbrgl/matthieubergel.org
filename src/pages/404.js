import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import Head from '../components/Layout/Head/Head'

const NotFoundPage = () => (
  <Layout>
    <Head title="404: Not found" />
    <h1>Not found</h1>
    <Link to="/">Return to homepage</Link>
  </Layout>
)

export default NotFoundPage
