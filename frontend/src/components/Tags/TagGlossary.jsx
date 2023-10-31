import React from 'react'
import styles from './tags.module.scss'
import TagsCard from './TagsCard'
import { tagsList } from './tagList'

const TagGlossary = () => {
  return (
    <div className={styles.tagsContainer}>
        <h1>Tags</h1>
        <div className='w-65_100'>
            <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
        </div>
        <div className={styles.tagListContainer}>
          {tagsList.map((tag, index) => (
            <TagsCard tag={tag} key={index} />
          ))}
        </div>
    </div>
  )
}

export default TagGlossary