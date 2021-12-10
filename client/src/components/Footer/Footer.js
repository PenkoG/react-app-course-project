import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.footer}>
                    <div className={styles.socialmedia}>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-imdb"></i>
                    </div>

                    <div className={styles.copyrights}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolore &copy;</p>
                    </div>

                    <div className={styles.footer_images}>
                        <img src='brand_logo.png' alt="" width="250px" />
                    </div>
                </div>
            </div>
        </>
    )
}