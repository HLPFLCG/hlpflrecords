import { useEffect } from 'react'
import Logo from './Logo'
import styles from '../styles/Loading.module.css'

const LoadingScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById('loading-screen')
      if (loader) {
        loader.style.opacity = '0'
        setTimeout(() => {
          loader.style.display = 'none'
        }, 500)
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="loading-screen" className={styles['loading-screen']}>
      <div className={styles['loading-content']}>
        <Logo width={80} height={80} className={styles['loading-logo']} />
        <div className={styles['loading-text']}>Loading HLPFL Records...</div>
        <div className={styles['loading-spinner']}></div>
      </div>
    </div>
  )
}

export default LoadingScreen
