fetch("https://teclead.de/recruiting/radios")
  .then(response => response.json())
  .then((data) => {
      const r1 = document.querySelector('#radio1');
      const r2 = document.querySelector('#radio2');
      const r3 = document.querySelector('#radio3');
      const r4 = document.querySelector('#radio4');

      const r1Channel = document.querySelector("#radioChannel1");
      const r2Channel = document.querySelector("#radioChannel2");
      const r3Channel = document.querySelector("#radioChannel3");
      const r4Channel = document.querySelector("#radioChannel4");

      const img1 = document.querySelector("#img")

    r1.innerText = data.radios[0].name
    r1Channel.innerText = data.radios[0].frequency
    img1.innerHTML = `<img src=${data.radios[0].image}>`

    r2.innerText = data.radios[1].name
    r2Channel.innerText = data.radios[1].frequency

    r3.innerText = data.radios[2].name
    r3Channel.innerText = data.radios[2].frequency

    r4.innerText = data.radios[3].name
    r4Channel.innerText = data.radios[3].frequency

    
  const details = document.querySelector('.hidden');
  r1.addEventListener('click', () => {
      if (details.style.display === 'flex') {
      details.style.display = 'none'; 
      } else {
        details.style.display = 'flex'; 
      }
    });
  });

  