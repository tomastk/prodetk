export type CompetenceResponse = Competences[];

export interface Competences {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  matchList: Match[];
  teamList: Team[];
  phasesList: Phase[];
}

export interface Team {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Match {
  homeTeam: Team;
  awayTeam: Team;
  matchDate: string;
  matchId: string;
}

export interface Phase {
  id: string;
  name: string;
  competenceName: string;
  matches: Match[];
}

export type GroupsCompetenceResponse = CompetenceGroup[];

export interface CompetenceGroup {
  id: string;
  slug: string;
  name: string;
  privateGroup: boolean;
  competenceName: string;
  competenceImageUrl: string;
  createdBy: string;
  members: string[];
}

export type Choices = Choice[];

export interface Choice {
  match: Match;
  choice: string;
}
