import { useEffect, useState } from "react";

const Image = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((resp) => resp.json())
      .then((resp) => setImageUrl(resp[0].url))
      .catch((error) => console.log(error));
  }, [imageUrl]);

  return (
    imageUrl && (
      <>
        <h1>an Image</h1>
        <img src={imageUrl} alt="placeholder img" />
      </>
    )
  );
};
