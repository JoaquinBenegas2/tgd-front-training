// Llamada a la API para obtener los usuarios
const METHOD = {
  forEach: "forEach",
  map: "map",
  filter: "filter",
  find: "find",
  some: "some",
  every: "every",
  reduce: "reduce",
  sort: "sort",
  slice: "slice",
  join: "join",
};

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // Ejemplos de métodos de arrays usando los datos obtenidos
    arrayMethodsExamples(users, METHOD.join);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
}

function arrayMethodsExamples(users, method) {
  switch (method) {
    case METHOD.forEach:
      /* 
      El método forEach recorre cada elemento del array y ejecuta una función para cada uno. 
      Es útil cuando quieres realizar alguna acción para cada elemento sin necesidad de crear un nuevo array. 
      */

      console.log("-- ForEach --");
      console.log("-- ------- --");
      users.forEach((user) => console.log(user.name));
      users.forEach((user) => (user.name = "Pepe"));
      users.forEach((user) => console.log(user.name));
      // console.log({ users });
      console.log("-- ------- --");
      console.log(
        "Explicación: forEach recorre cada usuario en el array users y muestra su nombre en la consola."
      );

      break;

    case METHOD.map:
      /* 
      El método map crea un nuevo array con los resultados de la función aplicada a cada elemento del array original. 
      */

      console.log("-- Map --");
      console.log("-- --- --");
      const userNames = users.map((user) => user.email);
      console.log({ userNames, users });
      console.log("-- --- --");
      console.log(
        "Explicación: map toma cada usuario del array users, extrae su correo electrónico y crea un nuevo array emails con esos valores."
      );

      break;

    case METHOD.filter:
      /* 
      El método filter crea un nuevo array con los elementos que cumplen la condición dada. 
      */

      console.log("-- Filter --");
      console.log("-- ------ --");
      const userLeanne = users.filter((user) => user.name === "Leanne Graham");
      console.log({ userLeanne });
      console.log("-- ------ --");
      console.log(
        "Explicación: filter recorre cada usuario y solo mantiene aquellos que tienen una suite, creando un nuevo array usersWithSuite con estos usuarios."
      );

      break;

    case METHOD.find:
      /* 
      El método find devuelve el primer elemento que cumple la condición dada. 
      */

      console.log("-- Find --");
      console.log("-- ---- --");
      const specificUser = users.find((user) => user.username === "Bret");
      console.log({ specificUser });
      console.log("-- ---- --");
      console.log(
        "Explicación: find devuelve el primer usuario que tiene el nombre de usuario 'Bret'."
      );

      break;

    case METHOD.some:
      /* 
      El método some devuelve true si al menos un elemento cumple la condición dada. 
      */

      console.log("-- Some --");
      console.log("-- ---- --");
      const hasUserFromCity = users.some((user) => user.address.city === "South Christy");
      console.log({ hasUserFromCity });
      console.log("-- ---- --");
      console.log(
        "Explicación: some devuelve true si al menos un usuario tiene la ciudad 'South Christy'."
      );

      break;

    case METHOD.every:
      /* 
      El método every devuelve true si todos los elementos cumplen la condición dada. 
      */

      console.log("-- Every --");
      console.log("-- ----- --");
      const allHaveEmails = users.every((user) => user.email.includes("@"));
      console.log({ allHaveEmails });
      console.log("-- ----- --");
      console.log(
        "Explicación: every devuelve true si todos los usuarios tienen un correo electrónico con '@'."
      );

      break;

    case METHOD.reduce:
      /* 
      El método reduce acumula un valor a de los elementos del array según la función dada. 
      */

      console.log("-- Reduce --");
      console.log("-- ------ --");
      const totalIdsSum = users.reduce((sum, user) => sum + user.id, 0);
      console.log({ totalIdsSum });
      console.log("-- ------ --");
      console.log(
        "Explicación: reduce acumula un valor A de los usuarios en el array users, sumando sus IDs."
      );
      console.log("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55");

      break;

    case METHOD.sort:
      /* 
      El método sort ordena los elementos del array según la función de comparación dada. 
      */

      console.log("-- Sort --");
      console.log("-- ---- --");
      //                             .slice() para evitar modificar el array original
      const sortedUsersByName = users.slice().sort((a, b) => a.name.localeCompare(b.name));
      //                                                            localCompare: Es un método que se usa para comparar dos cadenas de texto:
      //                                                            Devuelve un valor negativo, cero o positivo dependiendo de si la cadena a.name es,
      //                                                            respectivamente, menor, igual o mayor que b.name.
      console.log({ sortedUsersByName });
      console.log("-- ---- --");
      console.log(
        "Explicación: sort ordena los usuarios en el array users por nombre, creando un nuevo array sortedUsersByName."
      );

      break;

    case METHOD.slice:
      /* 
      El método slice devuelve una copia de una parte del array, especificando inicio y fin. 
      */

      console.log("-- Slice --");
      console.log("-- ----- --");
      const firstThreeUsers = users.slice(1, 5);
      console.log({ firstThreeUsers });
      console.log("-- ----- --");
      console.log("Explicación: slice crea una copia de los primeros 3 usuarios del array users.");

      break;

    case METHOD.join:
      /* 
      El método join une todos los elementos de un array en una cadena. 
      */

      console.log("-- Join --");
      console.log("-- ---- --");
      const userNamesString = users.map((user) => user.name).join(", ");
      console.log({ userNamesString });
      console.log("-- ---- --");
      console.log(
        "Explicación: join une todos los nombres de los usuarios en una cadena separada por comas."
      );

      break;
  }
}

fetchUsers();
