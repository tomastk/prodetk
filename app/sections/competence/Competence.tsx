import { Title } from "@/app/components";
import Button from "@/app/components/button";
import LinkButton from "@/app/components/button/LinkButton";
import { Competences, GroupsCompetenceResponse } from "@/app/models/list";
import { group } from "console";
import Link from "next/link";

type CompetenceProps = {
  competence: Competences;
  groups: GroupsCompetenceResponse;
};

const Competence = ({ competence, groups }: CompetenceProps) => {
  return (
    <div className="competence container spaced-content">
      <h1>{competence.name}</h1>
      <p>{competence.description}</p>
      <img
        style={{ borderRadius: "15px", objectFit: "cover" }}
        width={300}
        height={300}
        src={competence.imageUrl}
        alt={competence.name}
      />

      <Title title="Grupos" />

      {groups.length === 0 && <b>No hay grupos en esta competencia</b>}

      {groups.map((group) => {
        return (
          <>
            <Link href={`/groups/${group.id}`} className="group spaced-content">
              {group.privateGroup && <div className="tag">Privado</div>}
              <h2>{group.name}</h2>
              {group.members.length} jugadores
            </Link>
          </>
        );
      })}

      <LinkButton cta="Crear grupo" href="#" />
    </div>
  );
};
export default Competence;
