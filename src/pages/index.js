import Head from "next/head";
import styles from "@/styles/Login.module.css";
import loginUser from "../../public/loginUser.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login - DCIPS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainContainer}>
        <div className={styles.loginContainer}>
          <div className={styles.logo}>1</div>
          <div className={styles.inputContainer}>
            <div className={styles.input}>
              <div className={styles.inputLabel}>
                <Image src={loginUser}></Image>
              </div>
              <div className={styles.inputField}>2</div>
            </div>
            <div className={styles.input}>
              <div className={styles.inputIcon}></div>
              <div className={styles.inputField}>2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
