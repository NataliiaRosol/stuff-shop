import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import styles from './../../styles/Header.module.css'
import logo from '../../images/logo.svg'
import avatar from '../../images/avatar.svg'
import sprite from './../../../public/pubImages/sprite.svg'
import heart from '../../images/heart.svg'
import cartIcon from '../../images/cart-icon.svg'

export default function Header(){

  return(
    <div className={styles.header}>
      <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="" />
          </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.avatar} style={{backgroundImage:`url(${avatar})`}}></div>
          <div className={styles.username}>Guest</div>
        </div>
        
        <form className={styles.form}>
          <div className={styles.icon}>
            {/* <svg> */}
              <a href="" className="icon">
                <img src={sprite} alt=""  id='search'/>
              </a>
              
              {/* <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} /> */}
            
            {/* </svg> */}
          </div>
          <div className={styles.input}>
            <input type="search" name="search" id="" placeholder='Search for anything...' autoComplete='off'
            onChange={()=> {}}
            value=''
            />
          </div>

          {/* <div className={styles.box}></div> */}

        </form>

        <div className={styles.account}>
          <Link to='' className={styles.favourites}>
          {/* <svg > */}
              <a href="" className={styles['icon-fav']}>
                <img src={heart} alt="" id='heart'/>
              </a>
            {/* </svg> */}
          </Link>

          <Link to={ROUTES.CART} className={styles.cart}>
          {/* <svg > */}
              <a href="" className={styles['icon-cart']}>
                <img src={cartIcon} alt="" id='bag'/>
              </a>
              <span className={styles.count}>2</span>
            {/* </svg> */}
          </Link>
        </div>
      </div>
    </div>
  )
}