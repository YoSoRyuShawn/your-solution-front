import styles from "../styles/Doctor.module.css";

export default function Doctor(props) {
  return (
    <div
      className={styles.doctor}
      onClick={() => {
        //doctorsの配列から選ばれたdoctorの情報をindexを使って取り出す
        props.setIndex(props.index);
        props.setChangeView(false);
      }}
    >
      <div>
        <img className={styles.doctorimage} src={props.doctor.image} />
      </div>
      <div>
        <div className={styles.doctorname}>Dr. {props.doctor.first_name}</div>
        <div className={styles.doctorspecialty}>
          Specialties: {props.doctor.specialty}
        </div>
        <div className={styles.doctorprice}>
          {" "}
          Session Fee: {props.doctor.price}
        </div>
      </div>
    </div>
  );
}
