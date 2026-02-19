import useFetch from "../hooks/useFetch";
import useCounter from "../hooks/useCounter";
import Loading from "./Loading";
import Card from "./Card";
import ComponentAI from "./ComponentAI";

export interface Character {
  id: number;
  age: number;
  birthdate: string;
  description: string;
  first_appearance_ep_id: number;
  first_appearance_sh_id: number;
  gender: string;
  name: string;
  occupation: string;
  phrases: string[];
  portrait_path: string;
  status: string;
}

export const CustomHook = () => {
  const CHARACTERS_URL = `https://thesimpsonsapi.com/api/characters/`
  const IMG_URL = `https://cdn.thesimpsonsapi.com/200`
  const { counter, decrement, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch<Character>(
    `${CHARACTERS_URL}${counter}`,
  );

  console.log(data?.portrait_path);
  return (
    <>
      <h1>Información del Personaje</h1>
      <hr />
      <h2>{data?.name}</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>

          <div className="row">
            <div className="col-md-6 mb-3">
              <h5 className="mb-2">Componente: Original</h5>
              <Card
                id={counter}
                name={data?.name ?? ""}
                sprites={[data?.portrait_path ? `${IMG_URL}${data?.portrait_path}` : ""]}
                gender={data?.gender ?? "Desconocido"}
                occupation={data?.occupation ?? "Desconocida"}
              />
            </div>

            <hr></hr>

            <div className="col-md-6 mb-3">
              <h5 className="mb-2">Componente: Generado por AI</h5>
              <ComponentAI
                id={counter}
                name={data?.name ?? ""}
                sprites={[data?.portrait_path ? `${IMG_URL}${data?.portrait_path}` : ""]}
                gender={data?.gender ?? "Desconocido"}
                occupation={data?.occupation ?? "Desconocida"}
              />
            </div>
          </div>
        </>
      )}
      <br />
      <button className="btn btn-danger" onClick={() => decrement()}>
        Anterior
      </button>
      <button className="btn btn-primary" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
