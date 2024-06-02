"use client";

import { Title } from "@/app/components";
import { CompetenceResponse } from "@/app/models/list";
import { CompetencesService } from "@/app/services/CompetencesService.class";
import Link from "next/link";
import { useEffect, useState } from "react";

const Competences = () => {
  const [competencesList, setCompetencesList] = useState<CompetenceResponse>(
    [] as CompetenceResponse
  );

  useEffect(() => {
    CompetencesService.getAllCompetences().then(
      (competences: CompetenceResponse) => {
        setCompetencesList(competences);
      }
    );
  }, []);

  return (
    <div className={`spaced-content container`}>
      <Title title="Competencias" />
      <p>
        Ahora mismo, podés jugar estas competencias en <b>Prodetk</b>. El
        objetivo es añadir todas las ligas del mundo.
      </p>
      <div className="competences">
        {competencesList.map((competence) => {
          return (
            <Link href={`/competences/${competence.id}`}>
              <img src={competence.imageUrl} alt={competence.name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Competences;
