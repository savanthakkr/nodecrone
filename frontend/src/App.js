import './App.css';
import { useState } from "react";

function App() {

  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
    // profile_pic: "",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
          // profile_pic: "",
        });
      });
  };
  // const handleFileChange = (event) => {
  //   setMailerState({
  //     ...mailerState,
  //     profile_pic: event.target.files[0],
  //   });
  //   console.log(mailerState);
  // };

  return (
    <div className="App">
      <form
        className='contect-form-main'
        onSubmit={submitEmail}
      >
        <div className='form-contect'>
        <h1>React NodeMailer</h1>
          <input
          className='name inputfield'
            placeholder="Name"
            onChange={handleStateChange}
            name="name"
            value={mailerState.name}
          />
          <input
          className='email inputfield'
            placeholder="Email"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
          />
          <textarea
          className='message inputfield'
            style={{ minHeight: "100px" }}
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
          />
          {/* <input type="file" className="form-control" id="profile_pic" name="profile_pic" onChange={handleFileChange} /> */}
          <button className='send-message'>Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default App;
