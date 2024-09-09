import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import styles from './../../styles/Footer.module.css'
import logo from '../../images/logo.svg'
import instImg from '../../images/instagram.svg'
import ytImg from '../../images/youtube.svg'
import fbImg from '../../images/facebook.svg'


export default function Footer(){

  return(
    <section className={styles.footer}>
      <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="" />
          </Link>
      </div>

      <div className={styles.rights}>
            Developed by <span>Nataliia Rosol</span> 
      </div>

      <div className={styles.socials}>
        <a href="!#" target='_blank' rel='noreferrer' className=''>
          <img src={ytImg} alt=""  id='youtube'/>
        </a>
        <a href="!#" target='_blank' rel='noreferrer' className=''>
          <img src={fbImg} alt=""  id='instagram'/>
        </a>
        <a href="!#" target='_blank' rel='noreferrer' className=''>
          <img src={instImg} alt=""  id='instagram'/>
        </a>
      </div>
    </section>
  )
}