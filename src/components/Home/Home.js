import React, { Component } from 'react'
import styles from './Home.module.scss'
import Layout from '../Layout/Layout'
import Head from '../Layout/Head/Head'

//MDX Fragments
import Headline from '../../content/home/Headline.mdx'
import SubHeadline from '../../content/home/SubHeadline.mdx'
import History from '../../content/home/History.mdx'
import Today from '../../content/home/Today.mdx'


class Home extends Component {

  componentDidMount() {
    if('IntersectionObserver' in window) {
      let firstLoad = true;
      var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(function(entry) {
          if(firstLoad) {
            if(entry.intersectionRatio === 1) {
              this.toggleFocus()
            }
            firstLoad = false;
          } else {
            this.toggleFocus()
          }
        }, this)
      }, {threshold: 1.0});
      observer.observe(document.querySelector('.' + styles.today))
    }
  }

  render() {

    return (
      <Layout className={styles.home}>
        <Head title="Home" />
        <main>
          <div className={styles.intro}>
            <Headline className={styles.headline} />
            <SubHeadline className={styles.subHeadline} />
          </div>

        <div className={styles.content}>
          <div className={styles.scroll}></div>
          <History className={styles.history} />
          <Today className={styles.today} />
        </div>

        </main>
      </Layout>
    )
  }

  toggleFocus = () => {
    document.querySelector('body').classList.toggle(styles.focus);
  }

}

export default Home
