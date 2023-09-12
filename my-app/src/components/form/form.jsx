import { useEffect, useState } from "react";
import "./form.css";
import axios from "axios";
import hello from "./../../img/hello.png";
import arrow from "./../../img/arrow.png";

const Form = () => {
  const [state, setState] = useState({
    email: "",
    name: "",
    lname: "",
    phone: "",
    company: "",
    message: "",
    contentFile: [],
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: state.email,
      name: state.name,
      lname: state.lname,
      phone: state.phone,
      company: state.company,
      message: state.message,
      contentFile: state.contentFile,
    };
    axios
      .post("http://localhost:5000/api/Notice", userData)
      .then((response) => {
        console.log(response.status, response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [lnameDirty, setLnameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailError, setEmailError] = useState("Please enter valid Email");
  const [nameError, setNameError] = useState("Please enter valid First Name");
  const [lnameError, setLnameError] = useState("Please enter valid Last Name");
  const [phoneError, setPhoneError] = useState("Please enter valid Phone");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || nameError || lnameError || phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, nameError, lnameError, phoneError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Please enter valid email address");
    } else {
      setEmailError("");
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);

    const re = /^[a-z ,.'-]+$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError("Please enter valid First Name");
    } else {
      setNameError("");
    }
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);

    const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setPhoneError("Please enter valid Phone");
    } else {
      setPhoneError("");
    }
  };

  const lnameHandler = (e) => {
    setLname(e.target.value);

    const re = /^[a-z ,.'-]+$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setLnameError("Please enter valid Last Name");
    } else {
      setLnameError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "name":
        setNameDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      case "lname":
        setLnameDirty(true);
        break;
    }
  };

  return (
    <section className="form" id="section5">
      <div className="container">
        <div className="form_wrapper">
          <div className="text_block">
            <div className="form_text">
              Let's talk business.{" "}
              <img className="hello_icon" src={hello} alt="hello" />
            </div>
            <div className="form_subtext">
              Request a free consultation by filling out the form below and
              receive a prompt response from our team within 1 business day.
            </div>
          </div>
          <div className="form_block">
            <div className="form_title">Tell us about yourself</div>
            <form onSubmit={handleSubmit} >
              <div className="form_component">
                <label>
                  <div className="text_input">First Name</div>
                  <div className="error_name">
                    <input
                      onChange={(e) => {
                        nameHandler(e);
                        handleChange(e);
                      }}
                      value={name}
                      onBlur={(e) => blurHandler(e)}
                      className="name_input"
                      type="text"
                      name="name"
                      autoComplete="new-password" 
                    />
                    {nameDirty && nameError && (
                      <div className="error" style={{ color: "#AF1D42" }}>
                        {nameError}
                      </div>
                    )}
                  </div>
                </label>

                <label>
                  <div className="text_input">Last Name</div>
                  <div className="error_lname">
                    <input
                      onChange={(e) => {
                        lnameHandler(e);
                        handleChange(e);
                      }}
                      value={lname}
                      onBlur={(e) => blurHandler(e)}
                      name="lname"
                      className="name_input"
                      type="text"
                      autoComplete="new-password" 
                    />
                    {lnameDirty && lnameError && (
                      <div className="error" style={{ color: "#AF1D42" }}>
                        {lnameError}
                      </div>
                    )}
                  </div>
                </label>

                <label>
                  <div className="text_input">Email</div>
                  <div className="error_email">
                    <input
                      onChange={(e) => {
                        emailHandler(e);
                        handleChange(e);
                      }}
                      value={email}
                      onBlur={(e) => blurHandler(e)}
                      name="email"
                      className="name_input"
                      type="text"
                      autoComplete="new-password" 
                    />
                    {emailDirty && emailError && (
                      <div className="error" style={{ color: "#AF1D42" }}>
                        {emailError}
                      </div>
                    )}
                  </div>
                </label>

                <label>
                  <div className="text_input">Phone</div>
                  <div className="error_phone">
                    <input
                      onChange={(e) => {
                        phoneHandler(e);
                        handleChange(e);
                      }}
                      value={phone}
                      onBlur={(e) => blurHandler(e)}
                      name="phone"
                      className="name_input"
                      type="text"
                      autoComplete="new-password"
                    />
                    {phoneDirty && phoneError && (
                      <div className="error" style={{ color: "#AF1D42" }}>
                        {phoneError}
                      </div>
                    )}
                  </div>
                </label>

                <label>
                  <div className="text_input">Company</div>
                  <input className="name_input" type="text" name="name" autoComplete="new-password"  />
                </label>
                <label>
                  <div className="text_input">Role</div>
                  <input className="name_input" type="text" name="name" autoComplete="new-password" />
                  <input className="input_none" type="text" name="name" autoComplete="off" />
                </label>
              </div>
              <div className="sub_wrap">
              <div className="file-container">
                <button className="file-button">Choose File</button>
                <input onChange={handleChange} className="file" type="file" />
                </div>
                <div className="text_file">
                  PDF, Word, Excel, PNG, JPEG, and TXT files with less than 25MB
                  in size are supported.
                </div>
              </div>
              <div className="sub_wrap">
                <div className="but_submit">
                  <input
                    disabled={!formValid}
                    className="submit_form"
                    type="submit"
                    value="Submit"
                  />{" "}
                  <img className="arrow_icon" src={arrow} alt="arrow" />
                </div>

                <div className="text_sub">
                  By clicking submit button, you agree to our privacy policy.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Form;
