import styles from "../styles/Detail.module.css";
import _, { map } from "underscore";

export default function Detail(props) {
  return (
    <div className={styles.detail}>
      <div className={styles.info}>
        <div className={styles.fullname}>
          Dr.{props.doctor.first_name} {props.doctor.last_name}
        </div>
        <img className={styles.image} src={props.doctor.image} />
        <div className={styles.specialty}>
          Specialties:{props.doctor.specialty}
        </div>
        <div className={styles.desc}>{props.doctor.description} </div>
      </div>
      <div className={styles.pay}>
        {/* <div className={styles.availability}> */}
        availabilities:
        {(() => {
          let items = [];
          _.map(props.doctor.availability, function (num, key) {
            <div className={styles.key} key={key}>
              {key}
              {/* {for(const time of nom) {

                  }} */}
              <div className={styles.num} key={num}>
                {num}
              </div>
            </div>;

            // console.log("key", key, "num", num);
          });
          return items;
        })()}
        {/* </div> */}
        <div className={styles.price}>{props.doctor.price} Yen/session</div>
        <button
          className={styles.button}
          onClick={() => {
            //go payment
          }}
        >
          book
        </button>
      </div>
      <button
        className={styles.back}
        onClick={() => {
          props.setIndex(null);
          props.setChangeView(true);
        }}
      >
        Back to Top
      </button>
    </div>
  );
}
