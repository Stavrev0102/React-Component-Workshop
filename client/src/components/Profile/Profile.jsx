
import styles from '../Profile/Profile.module.css';

export default function Profile () {
    return (
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className={styles.colMd7}>
            <div className={styles.card}>
              <div className="text-center">
                <img
                  src="https://i.imgur.com/bDLhJiP.jpg"
                  width={100}
                  className="rounded-circle"
                />
              </div>
              <div className="text-center mt-3">
                <span className="bg-secondary p-1 px-4 rounded text-white">
                  Pro
                </span>
                <h5 className="mt-2 mb-0">Alexender Schidmt</h5>
                <span>UI/UX Designer</span>
                <div className="px-4 mt-1">
                  <p className={styles.fonts}>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
                <ul className={styles.socialList}>
                  <li>
                    <i className="fa fa-facebook" />
                  </li>
                  <li>
                    <i className="fa fa-dribbble" />
                  </li>
                  <li>
                    <i className="fa fa-instagram" />
                  </li>
                  <li>
                    <i className="fa fa-linkedin" />
                  </li>
                  <li>
                    <i className="fa fa-google" />
                  </li>
                </ul>
                <div className={styles.buttons}>
                  <button className="btn btn-outline-primary px-4">
                    Message
                  </button>
                  <button className="btn btn-primary px-4 ms-3">Contact</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}