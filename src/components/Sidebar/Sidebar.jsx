import { Link, NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import styles from './../../styles/Sidebar.module.css'
import { useSelector } from 'react-redux'

export default function Sidebar(){

  const {list} = useSelector(({categories}) => categories);
  

  return(

    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        {
          list.map(({slug, name})=>(
            <li key={slug}>
              <NavLink 
                className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}`}
                to={`/categories/${slug}`}>
                  {name}
              </NavLink>
            </li>
          ))
          
        }
        <ul className={styles.menu}>
          
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href="" target='_blank' className={styles.link}>Help</a>
        <a href="" target='_blank' className={styles.link} style={{textDecoration:'underline'}}>Terms & Conditions</a>
      </div>
    </section>
  )
}