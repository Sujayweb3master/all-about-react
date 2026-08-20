import styles from './Header.module.css'

const Header = () => {
    console.log('styles: ', styles)
    return (
        <div className={styles.header}>
            <h1>Header</h1>
            <button className={styles.button}>Go Here</button>
        </div>

    )
}

export default Header