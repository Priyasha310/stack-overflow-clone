import React from 'react'
import styles from './avatar.module.scss'

const Avatar = ({children, backgroundColor,width, height, px,pt, py, color, borderRadius, fontSize, cursor}) => {

    const style = {
        backgroundColor: backgroundColor ||'#009dff' , 
        padding: `${py} ${pt} ${px} `, 
        color: color || 'black', 
        borderRadius, 
        fontSize ,
        textAlign: "center", 
        cursor: cursor || 'null',
        textDecoration: 'none',
        width:width,
        height:height,
    }
    return (
        <div className={styles.avatar} style={style}>{children}</div>
    )
}

export default Avatar