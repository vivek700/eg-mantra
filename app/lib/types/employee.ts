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

// Example type validation
const employeeSchema: EmployeeData = {
    personalInfo: [
        {
            name: "string",
            img: "string",
            roles: "string",
            education: "string", // optional
            experience: {
                startYear: 2024,
            },
            skills: {
                software: "string",
            },
            others: ["string"],
        },
    ],
};