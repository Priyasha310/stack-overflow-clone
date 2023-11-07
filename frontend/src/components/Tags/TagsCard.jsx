import React from 'react'
import styles from './tags.module.scss'

const TagsCard = ({key, tag}) => {
  return (
    <div className={styles.tag} key={key}>
      <span>{tag.tagName}</span>
      <p>{tag.tagDesc}</p>
    </div>
  )
}

export default TagsCard