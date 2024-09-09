import React from "react";

/*
Si no se utiliza React.memo, el componente hijo se volverá a renderizar cada vez que el componente padre se renderice, incluso si las props que recibe no han cambiado.

En el ejemplo, si eliminamos React.memo del componente Child, entonces cada vez que el estado count en el componente padre App cambie (al presionar el botón "Increment"), el componente Child también se renderizará. Esto sucede porque, en React, cuando el componente padre se renderiza, por defecto también lo hacen los hijos, a menos que se apliquen técnicas de optimización como React.memo.
*/

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child component rendered");

  return <button onClick={onClick}>Click me!</button>;
});

export default Child;
