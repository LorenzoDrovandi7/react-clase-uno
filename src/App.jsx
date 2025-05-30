import { Welcome } from "./components/Welcome";
import { Tarjeta, BlogPost } from "./tarea/Tarea1";
import { MatchNombre } from "./tarea/Tarea2";
import { PasswordInput } from "./tarea/Tarea2";
import { ValidationInput } from "./tarea/Tarea2";

function App() {
  return (
    <>
      <Welcome nombre="Lorenzo" />
      <Tarjeta
        nombre="Lorenzo Drovandi"
        titulo="Full Stack Developer"
        imagen="https://avatars.githubusercontent.com/u/168254376?v=4"
      />
      <BlogPost
        titulo="Ardillas"
        parrafos={`Hoy vi una ardilla.\nLa ardilla era negra, tenía dientes, y parecía un perro.`}
        autor={{
          nombre: "Lorenzo Drovandi",
          titulo: "Full Stack Developer",
          imagen: "https://avatars.githubusercontent.com/u/168254376?v=4",
        }}
      />
      <MatchNombre nombre="Lorenzo" />
      <PasswordInput minLength={5} />
      <ValidationInput validation={(value) => value.length >= 8} />
      <ValidationInput validation={(value) => !value.includes(" ")} isPassword={true} />
      <ValidationInput
        validation={(value) =>
          value.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        }
      />
    </>
  );
}

export default App;
