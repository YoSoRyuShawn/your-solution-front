import styles from "../styles/Doctor.module.css";

export default function Doctor(props) {
  return (
    <div className={styles.doctor}>
      <img src={props.doctor.img} />
      <div className={styles.doctorname}>Dr.{props.doctor.first_name}</div>
      <div className={styles.doctorspeciality}>
        Specialities:{props.doctor.speciality}
      </div>
      <button
        className={styles.button}
        onClick={() => {
          //change state to single doctor
        }}
      >
        See more
      </button>
    </div>
  );
}
