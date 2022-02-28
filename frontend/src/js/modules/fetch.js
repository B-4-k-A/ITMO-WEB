export const fetch = () => {
  const getNewIdentity = async () => {
    const url = "https://randomuser.me/api";
    const el = document.getElementById("name");

    const response = await fetch(url);
    const data = await response.json();
    const user = data.results[0].name;
    const adr = data.results[0].location;
    const email = data.results[0].email;
    el.innerText = `${user.first} ${user.last} ${adr.city} ${email}`;
  };
  const btn = document.getElementById("new_profile");
  btn.onclick = getNewIdentity;
};
