import Doctor from "./Doctor";
import styles from "../styles/DoctorsList.module.css";

export default function DoctorsList(props) {
  const doctors = props.doctors;
  const list = [];
  for (const doctor of doctors) {
    list.push(<Doctor doctor={doctor} key={doctor.id} />);
  }
  return <div className={styles.doctorslist}>{list}</div>;
}
