import { useEffect, useState } from "react";
import "./styles.css";
const inState = {
  fname: "",
  mobile_no: "",
  email: "",
  password: "",
  c_password: "",
};
export default function App() {
  const [fromDetails, setFromDetails] = useState(inState);

  useEffect(() => {
    let user = localStorage.getItem("userInfo");

    if (user) {
      setFromDetails({ ...JSON.parse(user) });
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (fromDetails.password === fromDetails.c_password) {
      localStorage.setItem("userInfo", JSON.stringify(fromDetails));
      console.log(fromDetails);
    } else {
      alert("password does not match");
    }
  };

  const resetHandler = () => {
    localStorage.removeItem("userInfo");
    setFromDetails(inState);
  };

  const changeHandler = (e) => {
    setFromDetails({ ...fromDetails, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="App">
          <label>Full Name :</label>
          <input
            name="fname"
            type="text"
            value={fromDetails.fname}
            onChange={changeHandler}
          />
          <br />
          <label>Mobile No :</label>
          <input
            name="mobile_no"
            type="number"
            value={fromDetails.mobile_no}
            onChange={changeHandler}
          />
          <br />
          <label>Email :</label>
          <input
            name="email"
            type="email"
            value={fromDetails.email}
            onChange={changeHandler}
          />
          <br />
          <label>Password :</label>
          <input
            name="password"
            type="password"
            value={fromDetails.password}
            onChange={changeHandler}
          />
          <br />
          <label>Conform Password :</label>
          <input
            name="c_password"
            type="password"
            value={fromDetails.c_password}
            onChange={changeHandler}
          />
          <br />
          <button type="submit">Submit</button>
          <button type="reset" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </form>
      {fromDetails.password !== "" &&
        fromDetails.password === fromDetails.c_password && (
          <div>{fromDetails.fname}</div>
        )}
    </div>
  );
}
