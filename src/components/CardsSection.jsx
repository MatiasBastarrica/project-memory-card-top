import { useEffect } from "react";

export function CardsSection() {
  useEffect(() => {
    let ignore = false;
    const movies = {
      robinHood: fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=Ch5rqGEHlKhitIHbuoLPSmvNQ3OrOE4a&s=robin hood #animated #animation&limit=1",
      ).then((response) => {
        return response.json();
      }),
      aristocats: fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=Ch5rqGEHlKhitIHbuoLPSmvNQ3OrOE4a&s=the aristocats #disney&limit=1",
      ).then((response) => {
        return response.json();
      }),
      sleepingBeauty: fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=Ch5rqGEHlKhitIHbuoLPSmvNQ3OrOE4a&s=the sleeping beauty #disney #animation&limit=1",
      ).then((response) => {
        return response.json();
      }),
      hercules: fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=Ch5rqGEHlKhitIHbuoLPSmvNQ3OrOE4a&s=hercules #disney #animation&limit=1",
      ).then((response) => {
        return response.json();
      }),
      atlantis: fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=Ch5rqGEHlKhitIHbuoLPSmvNQ3OrOE4a&s=atlantis the lost empire #disney #animation #animated&limit=1",
      ).then((response) => {
        return response.json();
      }),
      mulan: fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=Ch5rqGEHlKhitIHbuoLPSmvNQ3OrOE4a&s=mulan #disney #animation #animated&limit=1",
      ).then((response) => {
        return response.json();
      }),
      tarzan: fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=Ch5rqGEHlKhitIHbuoLPSmvNQ3OrOE4a&s=tarzan #disney #animation #animated&limit=1",
      ).then((response) => {
        return response.json();
      }),
      theLionKing: fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=Ch5rqGEHlKhitIHbuoLPSmvNQ3OrOE4a&s=the lion king #disney #animation #animated&limit=1",
      ).then((response) => {
        return response.json();
      }),
      ladyAndTheTramp: fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=Ch5rqGEHlKhitIHbuoLPSmvNQ3OrOE4a&s=lady and the tramp #disney #animation #animated&limit=1",
      ).then((response) => {
        return response.json();
      }),
      pinocchio: fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=Ch5rqGEHlKhitIHbuoLPSmvNQ3OrOE4a&s=pinocchio #disney #animation #animated&limit=1",
      ).then((response) => {
        return response.json();
      }),
      cinderella: fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=Ch5rqGEHlKhitIHbuoLPSmvNQ3OrOE4a&s=cinderella #disney #animation #animated&limit=1",
      ).then((response) => {
        return response.json();
      }),
      aladdin: fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=Ch5rqGEHlKhitIHbuoLPSmvNQ3OrOE4a&s=aladdin #disney #animation #animated&limit=1",
      ).then((response) => {
        return response.json();
      }),
    };

    const promises = Object.values(movies);

    Promise.all(promises).then((values) => {
      if (!ignore) {
        const ul = document.querySelector("ul");
        values.forEach((value) => {
          const li = document.createElement("li");
          ul.appendChild(li);
          const img = document.createElement("img");
          li.appendChild(img);
          img.src = value.data.images.fixed_width.url;
        });
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <ul></ul>
    </>
  );
}
