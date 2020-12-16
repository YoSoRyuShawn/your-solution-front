import styles from "../styles/Details.module.css";

export default function Detail(props) {
  return (
    <div className={styles.detail}>
      <div className={styles.info}>
        <div className={styles.fullname}>
          Dr.{props.doctor.first_name} {props.doctor.last_name}
        </div>
        <img className={styles.image} src={props.doctor.image} />
        <div className={styles.specialty}>{props.doctor.specialty}</div>
        <div className={styles.desc}>{props.doctor.description} </div>
      </div>
      <div className={styles.pay}>
        {/* <div className={styles.availability}></div> How we select date*/}
        <div className={styles.price}>{props.doctor.price}</div>
        <button
          className={styles.button}
          onClick={() => {
            //go payment
          }}
        >
          book
        </button>
      </div>
    </div>
  );
}
