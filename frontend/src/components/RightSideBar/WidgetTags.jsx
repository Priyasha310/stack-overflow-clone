import React from 'react'
import styles from './right.module.scss'

const WidgetTags = () => {

  const tags = ['react', 'next', 'express', 'mongodb', 'sql', 'flutter', 'javascript', 'c++', 'firebase', 'figma', 'AI', 'css']
  return (
    <div className={styles.tagContainer}>
      <h4>Watched Tags</h4>
      <div className={styles.tagContent}>
          {tags.map((tag)=>(
            <span key={tag}>{tag}</span>
          ))}
      </div>
    </div>
  )
}

export default WidgetTags