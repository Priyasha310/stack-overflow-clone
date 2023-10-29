import React from 'react'
import styles from './avatar.module.scss'

const Avatar = ({children, backgroundColor, px, py, color, borderRadius, fontSize, cursor}) => {

    const style = {
        backgroundColor: backgroundColor ||'#009dff' , 
        padding: `${py} ${px}`, 
        color: color || 'black', 
        borderRadius, 
        fontSize ,
        textAlign: "center", 
        cursor: cursor || 'null',
        textDecoration: 'none',
    }
    return (
        <div className={styles.avatar} style={style}>{children}</div>
    )
}

export default Avatar