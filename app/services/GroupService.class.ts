import { CompetenceGroup, GroupsCompetenceResponse } from "../models/list";
import { API_ENDPOINT } from "./data";

export class GroupService {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  static async getById(id: string): Promise<CompetenceGroup> {
    return fetch(`${API_ENDPOINT}/api/groups/${id}`)
      .then((res) => res.json())
      .then((data) => data);
  }

  static async getByCompetenceID(
    competenceID: string
  ): Promise<GroupsCompetenceResponse> {
    return fetch(
      `${API_ENDPOINT}/api/groups/competence?competenceId=${competenceID}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => data);
  }
}
