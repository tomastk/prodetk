import { CompetenceGroup } from "@/app/models/list";
import Link from "next/link";

type GroupListProps = {
  groups: CompetenceGroup[];
};

const GroupList = ({ groups }: GroupListProps) => {
  return (
    <>
      {groups.map((group) => {
        return (
          <>
            <Link
              href={`/groups/${group.id}`}
              className="group spaced-content"
              key={group.id}
            >
              {group.privateGroup && <div className="tag">Privado</div>}
              <h2>{group.name}</h2>
              {group.members.length} jugadores
            </Link>
          </>
        );
      })}
    </>
  );
};
export default GroupList;
