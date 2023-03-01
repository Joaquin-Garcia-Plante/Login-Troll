import styles from "./App.module.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <div>
      <form className={styles.formContainer} autocomplete="off">
        <input
          type="text"
          placeholder="Ingrese su email"
          className={styles.inputEmail}
        />
        <br />
        <div className={styles.inputPwContainer}>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            className={styles.inputPassword}
          />
          <div className={styles.btnEyeIcon}>
            <AiFillEyeInvisible className={styles.eyeIcon}></AiFillEyeInvisible>
          </div>
        </div>
        <br />
        <div className={styles.checkbox}>
          <input type="checkbox" onClick={() => setChecked(!checked)} />
          <label>Acepto los términos y condiciones</label>
        </div>
        <br />
        {checked ? (
          <div className={styles.btnSubmit}>
            <input type="submit" />
          </div>
        ) : (
          <div className={styles.btnSubmitContainer}>
            <div className={styles.btnSubmitTroll}>
              <input type="submit" />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
