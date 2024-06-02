import { GroupComponent } from "@/app/components";
import { GroupService } from "@/app/services/GroupService.class";

export default async function Page({ params }: { params: { id: string } }) {
  const group = await GroupService.getById(params.id);
  return (
    <>
      <GroupComponent group={group} userHasJoined={true} />
    </>
  );
}
