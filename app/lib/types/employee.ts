// Base type
export type Info = {
    name: string;
    img: string;
    roles: string;
    education?: string;
    experience: {
        startYear: number;
    };
    skills: {
        software: string;
    };
    others: string[];
}

// Root type for the whole data structure
export type EmployeeData = {
    personalInfo: Info[];
}

