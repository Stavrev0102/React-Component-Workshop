import * as styles from './ErrorPath.module.css'
import { Link } from 'react-router-dom'

export default function ErrorPath() {

    return(
        <div className={styles.error}>
            <h1>404 Ops... Wrong way...</h1>
            <Link className={styles.link} to={'/'}>Back to Home Page</Link>
        </div>
    )
}