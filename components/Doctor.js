import styles from "../styles/Doctor.module.css";

export default function Doctor(props) {
  return (
    <div className={styles.doctor}>
      <img className={styles.doctorimage} src={props.doctor.image} />
      <div className={styles.doctorname}>Dr.{props.doctor.first_name}</div>
      <div className={styles.doctorspecialty}>
        Specialties:{props.doctor.specialty}
      </div>
      <div className={styles.doctorprice}>{props.doctor.price} Yen/session</div>
      <button
        className={styles.button}
        onClick={() => {
          //doctorsの配列から選ばれたdoctorの情報をindexを使って取り出す
          props.setIndex(props.doctor.id - 1);
          props.setChangeView(false);
        }}
      >
        See more
      </button>
    </div>
  );
}
