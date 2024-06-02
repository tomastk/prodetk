import { CompetenceGroup } from "@/app/models/list";
import Title from "../title";
import Button from "../button";
import Prediction from "../prediction";

type GroupComponentProps = {
  group: CompetenceGroup;
  userHasJoined: boolean;
};

const GroupComponent = ({ group, userHasJoined }: GroupComponentProps) => {
  return (
    <div className="container spaced-content">
      <h1>{group.name}</h1>
      <div className="competence-details">
        <h2>{group.competenceName}</h2>
        <img width={50} height={50} src={group.competenceImageUrl} alt="" />
      </div>
      <Title title="Integrantes" />
      <div className="group-members">
        {group.members.map((member) => {
          return <p>{member}</p>;
        })}
      </div>

      {userHasJoined && (
        <>
          <Title title="Tus predicciones" />
          <Prediction />
        </>
      )}

      {!userHasJoined && (
        <Button cta="Unirme al grupo" link={`/groups/${group.id}`} />
      )}
    </div>
  );
};
export default GroupComponent;
