import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCheck, faCoffee, faBeer } from "@fortawesome/free-solid-svg-icons";
import styles from "./Counter.module.css";

function Counter() {
  return (
    <section className={styles.counter}>
      <div className={styles.main_counter_area}>
        <div className={styles.overlay}>
          <div className="container">
            <div className="row text-center wow fadeInUp">
              {/* Counter Item 1 */}
              <div className="col-md-3">
                <div className={styles.single_counter}>
                  <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
                  <h2 className="statistic-counter">11</h2>
                  <p>Worked on Projects</p>
                </div>
              </div>

              {/* Counter Item 2 */}
              <div className="col-md-3">
                <div className={styles.single_counter}>
                  <FontAwesomeIcon icon={faCheck} className={styles.icon} />
                  <h2 className="statistic-counter">11</h2>
                  <p>Testing</p>
                </div>
              </div>

              {/* Counter Item 3 */}
              <div className="col-md-3">
                <div className={styles.single_counter}>
                  <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
                  <h2 className="statistic-counter">6</h2>
                  <p> SEO Optimization</p>
                </div>
              </div>

              {/* Counter Item 4 */}
              <div className="col-md-3">
                <div className={styles.single_counter}>
                  <FontAwesomeIcon icon={faBeer} className={styles.icon} />
                  <h2 className="statistic-counter">10</h2>
                  <p> Clients Satisfied</p>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
