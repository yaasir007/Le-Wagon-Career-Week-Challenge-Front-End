const results = document.querySelector("#results");

fetch("https://teclead.de/recruiting/radios")
  .then(response => response.json())
  .then((data) => {
      console.log(data);
   console.log(data.radios[0].name);
  });