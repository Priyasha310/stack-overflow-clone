import React from 'react'
import pen from '../../assets/pen-solid.svg'
import comment from '../../assets/comment-alt-solid.svg'
import logo from '../../assets/blacklogo.svg'
import styles from './right.module.scss'

const Widget = () => {
  return (
    <div className={styles.widgetContainer}>
      <h4>The Overflow Blog</h4>
      <div className={styles.blogContainer}>
          <div className={styles.blogContent}>
            <img src={pen} alt='pen' width={10} height={10}/>
            <p>Privacy in the age of generative AI</p>
          </div>
          <div className={styles.blogContent}>
            <img src={pen} alt='pen' width={10} height={10}/>
            <p>Forget the 10X engineer—it’s about building a 10X culture</p>
          </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className={styles.blogContainer}>
          <div className={styles.blogContent}>
            <img src={comment} alt='comment' width={10} height={10}/>
            <p>Privacy in the age of generative AI</p>
          </div>
          <div className={styles.blogContent}>
            <img src={comment} alt='comment' width={10} height={10}/>
            <p title='Changes to MSE deployment process may cause intermittent issues on November any random year  of the lifespan the world started duh..'>Changes to MSE deployment process may cause intermittent issues on November any random year of the lifespan the world started duh..</p>
          </div>
          <div className={styles.blogContent}>
            <img src={logo} alt='icon' width={10} height={10}/>
            <p>Expanding Discussions: Let's talk about curation</p>
          </div>
          <div className={styles.blogContent}>
            <img src={logo} alt='icon' width={10} height={10}/>
            <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
          </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className={styles.blogContainer}>
          <div className={styles.blogContent}>
            <span>27</span>
            <p>Bright, red, aggressive color ads in Stack Overflow</p>
          </div>
          <div className={styles.blogContent}>
            <span>27</span>
            <p>Is it OK to delete the old AI answer Help Center article, now that there's a...</p>
          </div>
      </div>
    </div>
  )
}

export default Widget