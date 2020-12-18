import styles from "../styles/Title.module.css";
import Router from "next/router";
export default function Title(props) {
  const titleClick = () => {
    if(props.doctors) {
      props.setDoctors(props.doctors)
      props.setChangeView(true);
      return;
    } else {
      Router.push("/");
      return;
    }
  }
  return(
    <div className={styles.title}>
      <img className={styles.logo}
        src="/logo.jpg"
        onClick={titleClick}
      ></img>
    </div>
  );
}