export interface Team {
    teams: TeamElement[];
}

export interface TeamElement {
    id:          number;
    name:        string;
    description: string;
    deleted:     boolean;
    created_at:  Date;
    updated_at:  Date;
}