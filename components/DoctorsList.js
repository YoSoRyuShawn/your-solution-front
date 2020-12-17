import Doctor from "./Doctor";
import styles from "../styles/DoctorsList.module.css";

export default function DoctorsList(props) {
  const doctors = props.doctors;
  const list = [];
  for (let i = 0; i < doctors.length; i++) {
    list.push(
      <Doctor
        doctor={doctors[i]}
        key={doctors[i].id}
        index={i}
        setChangeView={props.setChangeView}
        setIndex={props.setIndex}
      />
    );
  }
  return <div className={styles.doctorslist}>{list}</div>;
}
