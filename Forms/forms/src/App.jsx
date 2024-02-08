import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postal: "",
    comments: false,
    candidates: false,
    offers: false,
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setformData((prevData) => {
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div onSubmit={submitHandler}>
      <form className="form">
        <label htmlFor="lastName">Enter Your First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          placeholder="Aniket"
          onChange={changeHandler}
        />

        <label htmlFor="lastName">Enter Your Last Name</label>

        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          placeholder="Singh"
          onChange={changeHandler}
        />

        <label htmlFor="email">Enter Your Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          placeholder="aniket123@xyz.com"
          onChange={changeHandler}
        />

        <label htmlFor="country">Select your Country</label>
        <select
          name="country"
          id="country"
          onChange={changeHandler}
          value={formData.country}
        >
          <option value="Usa">Usa</option>
          <option value="India">India</option>
          <option value="London">London</option>
          <option value="Spain">Spain</option>
          <option value="Australia">Australia</option>
        </select>

        <label htmlFor="streetAddress">Enter Your Street Address</label>

        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          value={formData.streetAddress}
          placeholder="123 Main Street"
          onChange={changeHandler}
        />

        <label htmlFor="city">Enter Your City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          placeholder="Lucknow"
          onChange={changeHandler}
        />

        <label htmlFor="State">Enter Your State</label>

        <input
          type="text"
          id="State"
          name="state"
          value={formData.state}
          placeholder="Uttar Pradesh"
          onChange={changeHandler}
        />

        <label htmlFor="postal">Enter Your Postal</label>

        <input
          type="text"
          id="postal"
          name="postal"
          value={formData.postal}
          placeholder="226021"
          onChange={changeHandler}
        />

        <fieldset>
          <legend>By Email</legend>

          <div className="flex">
            <div>
              <input
                type="checkbox"
                name="comments"
                id="comments"
                onChange={changeHandler}
                checked={formData.checked}
              />
            </div>
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <div>
              <input
                type="checkbox"
                name="candidates"
                id="candidates"
                onChange={changeHandler}
                checked={formData.checked}
              />
            </div>
            <div>
              <label htmlFor="candidates">candidates</label>
              <p>Get notified when a candidate applies focandidates</p>
            </div>
          </div>

          <div className="flex">
            <div>
              <input
                type="checkbox"
                name="offers"
                id="offers"
                onChange={changeHandler}
                checked={formData.checked}
              />
            </div>

            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
