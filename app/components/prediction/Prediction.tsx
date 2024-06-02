import predictions from "@/app/mockups/user-choices-in-group.json";
import { match } from "assert";

function getChoiceTitle(prediction: any) {
  if (prediction.choice === "HOME") {
    return "Gana el equipo local";
  } else if (prediction.choice === "AWAY") {
    return "Gana el equipo visitante";
  } else {
    return "Empate";
  }
}

const formatedDate = (date: string) => {
  const dateFormated = new Date(date);

  /*
  return (
    dateFormated.getDay() +
    "/" +
    dateFormated.getMonth() +
    "/" +
    dateFormated.getFullYear()
  ); */

  return dateFormated.toLocaleDateString();
};

const Prediction = () => {
  const sortedPredictions = predictions.sort((a, b) => {
    return (
      new Date(a.match.matchDate).getTime() -
      new Date(b.match.matchDate).getTime()
    );
  });

  return (
    <div className="spaced-content ">
      {sortedPredictions.map((prediction) => {
        return (
          <div className="bg-white spaced-content">
            <h2>
              {prediction.match.homeTeam.name} -{" "}
              {prediction.match.awayTeam.name}
            </h2>
            <p>{formatedDate(prediction.match.matchDate)}</p>
            <div className="grid grid-5 prediction ">
              <img
                className="prediction_team_image"
                src={prediction.match.homeTeam.imageUrl}
                alt=""
              />
              <div
                className={`prediction-rectangle ${
                  prediction.choice === "HOME" && "selected"
                }`}
              ></div>
              <div
                className={`prediction-rectangle ${
                  prediction.choice === "DRAW" && "selected"
                }`}
              ></div>
              <div
                className={`prediction-rectangle ${
                  prediction.choice === "AWAY" && "selected"
                }`}
              ></div>
              <img
                className="prediction_team_image"
                src={prediction.match.awayTeam.imageUrl}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Prediction;
