import React, { useState } from "react";
import "./details.css";

const ProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false); 
  const [firstName, setFirstName] = useState("Prithiv");
  const [lastName, setLastName] = useState("raj");
  const [email, setEmail] = useState("prithiv936@gmail.com");
  const [phone, setPhone] = useState("9361648407");
  const [country, setCountry] = useState("19");
  const [city, setCity] = useState("O+");
  const [address, setAddress] = useState("6 ft");
  const [zipCode, setZipCode] = useState("65 kg");

  const handleEditToggle = () => {
    setIsEditing(!isEditing); 
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", {
      firstName,
      lastName,
      email,
      phone,
      country,
      city,
      address,
      zipCode,
    });
    setIsEditing(false); 
  };

  return (
    <div className="profile-form-container">
      <div className="avatar-banner">
        <div className="avatar">
          <img
            src="https://imgs.search.brave.com/6T4oYY2aQcqpAskwH5wVw6YtnzCYIoD9eNmrgCKPSOw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZXR3/YWxscGFwZXJzLmNv/bS93YWxscGFwZXIv/ZnVsbC80LzkvOS8x/MTgwMTc4LXdpZGVz/Y3JlZW4tY2F0LWhk/LXdhbGxwYXBlcnMt/MTA4MHAtMjA0OHgy/MDQ4LWZvci1pcGFk/LTIuanBn"
            alt="Avatar"
          />
        </div>
      </div>
      <div className="profile-form-wrapper">
        <div className="profile-form">
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">First Name</label>
              {isEditing ? (
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              ) : (
                <p>{firstName}</p>
              )}
            </div>
            <div className="col">
              <label htmlFor="lastName">Last Name</label>
              {isEditing ? (
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              ) : (
                <p>{lastName}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="email">Email Address</label>
              {isEditing ? (
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <p>{email}</p>
              )}
            </div>
            <div className="col">
              <label htmlFor="phone">Phone Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              ) : (
                <p>{phone}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="country">Age</label>
              {isEditing ? (
                <input
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              ) : (
                <p>{country}</p>
              )}
            </div>
            <div className="col">
              <label htmlFor="city">Blood Group</label>
              {isEditing ? (
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              ) : (
                <p>{city}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="address">Height</label>
              {isEditing ? (
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              ) : (
                <p>{address}</p>
              )}
            </div>
            <div className="col">
              <label htmlFor="zipCode">Weight</label>
              {isEditing ? (
                <input
                  type="text"
                  id="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              ) : (
                <p>{zipCode}</p>
              )}
            </div>
          </div>
          <button
            className="save-btn"
            onClick={isEditing ? handleSaveChanges : handleEditToggle}
          >
            {isEditing ? "Save Changes" : "Edit Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
