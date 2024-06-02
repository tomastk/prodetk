import { CompetenceResponse, Competences } from "../models/list";
import { API_ENDPOINT } from "./data";

export class CompetencesService {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  static async getById(id: string) {
    return await fetch(`${API_ENDPOINT}/api/competences/${id}`)
      .then((response) => response.json())
      .then((data) => data as Competences);
  }

  static async getAllCompetences(): Promise<CompetenceResponse> {
    return await fetch(`${API_ENDPOINT}/api/competences`)
      .then((response) => response.json())
      .then((data) => data as CompetenceResponse);
  }
}
