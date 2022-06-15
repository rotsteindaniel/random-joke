const btn = document.querySelector("#btn");
const h2 = document.querySelector("#joke");

const jokeGenerator = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const url = "https://icanhazdadjoke.com/";
    const res = await axios.get(url, config);
    const joke = res.data.joke;
    return (h2.innerHTML = joke);
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", jokeGenerator);
