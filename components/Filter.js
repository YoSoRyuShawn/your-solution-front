import styles from "../styles/Filter.module.css";
export default function FIlter(props) {
  const specialtyFilter = (e) => {
    const specialty = e.target.value;
    let filterdDoctors = props.allDoctors;
    if(specialty !== "All") {
      filterdDoctors = filterdDoctors.filter((doctor) => {
        return doctor.specialty === specialty;
      })
    }
    props.setDoctors(filterdDoctors);
  }
  const dateFilter = (e) => {
    const date = e.target.value;
    console.log(date);
  }
  return (
    <div className={styles.filter}>
      <select 
        name="specialty" 
        size="1" 
        className={styles.selectbox}
        onChange={specialtyFilter}
      >
        <option value="All" selected>All</option>
        <option value="General Physician">General Physician</option>
        <option value="Surgeon">Surgeon</option>
        <option value="Physical Therapist">Physical Therapist</option>
        <option value="Nurse">Nurse</option>
        <option value="Neurologist">Neurologist</option>
        <option value="Pediatrician">Pediatrician</option>
        <option value="Dentist">Dentist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Pharmacist">Pharmacist</option>
      </select>
      <select 
        name="date" 
        size="1" 
        className={styles.selectbox}
        onChange={dateFilter}
      >
        <option value="All" selected>All</option>
        <option value="Sundat">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>
    </div>
  );
}