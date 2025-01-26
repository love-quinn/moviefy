import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LastUpdated from "../../components/LastUpdated/LastUpdated";
import Card from "../../components/Card/Card";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";

const Home = () => {
  const [respData, setRespData] = useState();
  const [isError, SetIsError] = useState(false);
  const [errorMessage, SetErrorMessage] = useState();

  const url =
    "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc";

  // const auth_bearer = "import.meta.env.VITE_XX";
  const auth_bearer =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDk1ODYwYTEyMmZlMDk1ZmY5ODJjMjNlMjcxMTJlOCIsIm5iZiI6MTcxNjU3OTI2Ni44MDcwMDAyLCJzdWIiOiI2NjUwZWJjMmVlODJiNDVlYjIyNmI5YTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rWb6jTIOPdq046QsnTYDWGZ2svuNYb2_km_pUqmOOYY";

  useEffect(() => {
    const getMovies = async () => {
      SetIsError(false);
      SetErrorMessage();
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: auth_bearer,
        },
      });
      const data = await resp.json();
      if (Array.isArray(data.results)) {
        setRespData(data.results);
      } else {
        SetIsError(true);
        SetErrorMessage("Error to retrieve data, contact the support team");
      }
    };

    try {
      getMovies();
    } catch (e) {
      SetIsError(true);
      SetErrorMessage("Server error, contact the support team");
    }
  }, []);

  return (
    <main className="container py-4">
      <Header />

      <LastUpdated />
      <section className="container text-center">
        {isError && <ErrorComponent errorMessage={errorMessage} />}

        <div
          id="my-grid"
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 align-items-start"
        >
          {Array.isArray(respData) &&
            respData.map((movie, index) => (
              <Card key={index} index={index} movie={movie}></Card>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
