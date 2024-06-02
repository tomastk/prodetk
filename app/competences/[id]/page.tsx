import { Competence } from "@/app/sections";
import { CompetencesService } from "@/app/services/CompetencesService.class";
import { GroupService } from "@/app/services/GroupService.class";

export default async function Page({ params }: { params: { id: string } }) {
  const competence = await CompetencesService.getById(params.id);
  const competenceGroups = await GroupService.getByCompetenceID(params.id);

  return (
    <>
      <Competence competence={competence} groups={competenceGroups} />
    </>
  );
}
