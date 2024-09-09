import { Link } from 'react-router-dom';
import styles from './../../styles/Categories.module.css'
import categoryImg from './../../images/categoryImg.jpg'

export default function Categories({ title, products = [], amount }){
  const list = products.filter((_, i) => i < amount);

  return(
    <section className={styles.section}>
      <h2>{title}</h2>

      <div className={styles.list}>
        {
          list.map(({slug, name, image})=> (
            <Link to={`/categories/${slug}`} key={slug} className={styles.item}>
              <div className={styles.image} style={{backgroundImage: `url(${categoryImg})`}}></div>
              <h3 className={styles.title}>{name}</h3>
            </Link>
            
          ))
        }
      </div>
    </section>
  )
}