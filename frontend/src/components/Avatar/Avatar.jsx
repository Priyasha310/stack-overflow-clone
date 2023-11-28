import React from 'react'
import styles from './avatar.module.scss'

const Avatar = ({children, backgroundColor,width, height, px, py, color, borderRadius, fontSize, cursor}) => {

    const style = {
        backgroundColor: backgroundColor ||'#009dff' , 
        padding: `${py}  ${px} ` || '0 0', 
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