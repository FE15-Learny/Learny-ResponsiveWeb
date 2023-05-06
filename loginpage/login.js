let users = [];

let inputLogin = {
  username: "user",
  password: "123",
};

// ============== async await =====================
const getDataUser = async () => {
  const response = await fetch(
    "https://6453c007e9ac46cedf2ea18c.mockapi.io/users"
  );
  const result = await response.json();

  console.log(result);
  users = [...result];

  for (item of users) {
    if (
      item.username === inputLogin.username &&
      item.password === inputLogin.password
    ) {
      console.log("login berhasil");
      break;
    } else {
      console.log("username dan password salah");
      break;
    }
  }
};

getDataUser();

// ================ promise ======================
fetch("https://6453c007e9ac46cedf2ea18c.mockapi.io/users")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
