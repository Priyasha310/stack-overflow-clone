import React from 'react'
import styles from './tags.module.scss'

const TagsCard = ({tag}) => {
  return (
    <div className={styles.tag}>
        <span>{tag.tagName}</span>
        <p>{tag.tagDesc}</p>
    </div>
  )
}

export default TagsCard