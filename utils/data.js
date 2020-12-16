import axios from "axios";

export const getAlldoctors = async () => {
  const data = (
    await axios.get("https://your-solution-stg.herokuapp.com/api/doctors")
  ).data;
  return data;
};
