import styles from "./App.module.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const [viewPasswordRep, setViewPasswordRep] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");

  const handleSetPW = (e) => {
    setPassword(e.target.value);
  };

  const handleSetPWRep = (e) => {
    setPasswordRep(e.target.value);
  };

  return (
    <div>
      <form className={styles.formContainer} autocomplete="off">
        <div>
          <input
            type="text"
            placeholder="Ingrese su email"
            className={styles.inputEmail}
          />
        </div>
        <br />
        <div className={styles.inputPwContainer}>
          <input
            value={password}
            type={viewPassword ? "text" : "password"}
            placeholder="Ingrese su contraseña"
            className={styles.inputPassword}
            onChange={(e) => handleSetPW(e)}
          />
          <div
            className={styles.btnEyeIcon}
            onClick={() => setViewPassword(!viewPassword)}
          >
            {viewPassword ? (
              <AiFillEye className={styles.eyeIcon}></AiFillEye>
            ) : (
              <AiFillEyeInvisible
                className={styles.eyeIcon}
              ></AiFillEyeInvisible>
            )}
          </div>
        </div>
        <br />
        <div className={styles.inputPwContainer}>
          <input
            value={passwordRep}
            type={viewPasswordRep ? "text" : "password"}
            placeholder="Repita su contraseña"
            className={styles.inputPassword}
            onChange={(e) => handleSetPWRep(e)}
          />
          <div
            className={styles.btnEyeIcon}
            onClick={() => setViewPasswordRep(!viewPasswordRep)}
          >
            {viewPasswordRep ? (
              <AiFillEye className={styles.eyeIcon}></AiFillEye>
            ) : (
              <AiFillEyeInvisible
                className={styles.eyeIcon}
              ></AiFillEyeInvisible>
            )}
          </div>
        </div>
        <br />
        <div className={styles.checkbox}>
          <input type="checkbox" onClick={() => setChecked(!checked)} />
          <label>Acepto los términos y condiciones</label>
        </div>
        <br />
        {checked ? (
          <div className={styles.btnSubmitNoTrollContainer}>
            <input type="submit" className={styles.btnSubmit} />
          </div>
        ) : (
          <div className={styles.btnSubmitContainer}>
            <input type="submit" className={styles.btnSubmitTroll} />
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
