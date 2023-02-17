import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [profileData, setProfileData] = useState(null);

  function getData() {
    axios({
      method: "GET",
      url: "http://127.0.0.1:5000/profile",
    })
      .then((response) => {
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        Get started by editing <code>pages/index.js</code>
        <p>To get your profile details: </p>
        <button onClick={getData}>Click me</button>
        {profileData && (
          <div>
            <p>Profile name: {profileData.profile_name}</p>
            <p>About me: {profileData.about_me}</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
