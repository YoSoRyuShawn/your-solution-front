import styles from "../styles/Detail.module.css";
import _ from "underscore";
import Router from "next/router";
export default function Detail(props) {
  let timeTags = [];
  for (const day in props.doctor.availability) {
    const time = props.doctor.availability[day];
    const timeDom = time.map((t, i) => {
      t.toString().length === 3
        ? (t = `${t.toString().substr(0, 1)}:${t.toString().substr(1, 2)}`)
        : (t = `${t.toString().substr(0, 2)}:${t.toString().substr(2, 2)}`);
      return (
        <label key={t}>
          <input
            className={styles.daybtn}
            type="button"
            value={t}
            key={i}
            onClick={(e) => {
              const doctorName = props.doctor.first_name + " " + props.doctor.last_name;
              Router.push({
                pathname: "/checkout/form",
                query: {
                  amount: props.doctor.price,
                  time: e.target.value,
                  date: e.target.parentNode.parentNode.parentNode.className,
                  doctorName: doctorName,
                  doctorPic: props.doctor.image
                },
              });
            }}
          />
        </label>
      );
    });
    timeTags.push(
      <div className={day} key={day}>
        <div>{day}</div>
        <div>{timeDom}</div>
      </div>
    );
  }
  return (
    <div className={styles.detail}>
      <div className={styles.info}>
        <img className={styles.image} src={props.doctor.image} />
        <div className={styles.fullname}>
          Dr. {props.doctor.first_name} {props.doctor.last_name}
        </div>
        <div className={styles.specialty}>
          Specialty: {props.doctor.specialty}
        </div>
        <div className={styles.desc}>{props.doctor.description} </div>
        <div className={styles.pay}>
            <div>
              <span className={styles.schedule}>Schedule a Zoom Meeting:</span>
            </div>
          <div className={styles.availability}>
            <div className={styles.days}>{timeTags}</div>
          </div>
          <div className={styles.price}>
            <span className={styles.amount}>Session Fee: </span>
            {props.doctor.price}{" "}
          </div>
        </div>
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
