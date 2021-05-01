import React, { useEffect, useState } from "react";

const Account = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    // const url = "https://www.instagram.com/adam_andrys/?__a=1";
    const url = "/api/user/list2";
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return (
      <div
        className="account-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="account-container">
      <h1>Welcome to your account</h1>
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        Click!
      </button>
      <p>Username: {data.username}</p>
      <p>Title: </p>
    </div>
  );
};

export default Account;
