import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <>
      <div className="text-center m-4 text-3xl p-4 text-white bg-gray-700">
        GitHub Followers:{data.followers}
        <img src={data.avatar_url} alt="Git picture " width={250}></img>
      </div>
    </>
  );
}
export const githubInfoLoader = async () => {
  const response = await fetch("http://api.github.com/users/hiteshchoudhary");
  return response.json();
};
