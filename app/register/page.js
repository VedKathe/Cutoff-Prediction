import React from "react";

import styles from "./register.module.css";

export default function register() {
  return (
    
    
    <div className={styles.container}>
      <div className={styles['title']}>
        Register your Collage
      </div>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <div>
          <label htmlFor="collageName">Collage Name</label>
          <input type="text" id="collageName" name="collageName" />
        </div></div>

        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" name="zipCode" />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="phoneNo">Phone Number</label>
            <input type="tel" id="phoneNo" name="phoneNo" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="CS">CS</label>
            <input type="text" id="CS" name="CS" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="Civil">Civil</label>
            <input type="text" id="Civil" name="Civil" />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="mech">Mech</label>
            <input type="text" id="mech" name="mech" />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="ENTC">ENTC</label>
            <input type="text" id="ENTC" name="ENTC" />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="Chemical">Chemical</label>
            <input type="text" id="Chemical" name="Chemical" />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="Chemical">Chemical</label>
            <input type="text" id="Chemical" name="Chemical" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
}
