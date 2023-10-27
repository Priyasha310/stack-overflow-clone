import React from 'react'
import styles from './right.module.scss'
import Widget from './Widget'
import WidgetTags from './WidgetTags'

const RightSideBar = () => {
  return (
    <aside className={styles.rightSidebar}>
      <Widget/>
      <WidgetTags/>
    </aside>
  )
}

export default RightSideBar