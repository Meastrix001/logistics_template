export const jobsMockData = {
    1: {
        jobTitle: "Sales Specialist in the TSL Industry",
        locations: ["Krakow", "Katowice", "Lublin", "Warsaw", "Rzeszow"],
        employmentType: "Full-time",
        contractType: ["Employment contract", "B2B contract"],
        responsibilities: [
            "Active sales of transport services",
            "Acquiring new clients for own fleet and subcontractors",
            "Preparing price quotes for clients",
            "Building long-term business relationships with clients",
            "Managing transport exchanges",
            "Conducting commercial negotiations",
        ],
        requirements: [
            "At least one year of experience in the transport industry",
            "Knowledge of the TSL market",
            "Experience working on transport exchanges",
            "Ability to build and maintain long-term client and carrier relationships",
            "Proficient in computer programs",
            "Flexible approach to the transport market and ability to adapt to market conditions",
        ],
        benefits: [
            "No loyalty agreement",
            "Support from the administration/accounting department after transport completion",
            "24h dispatch team to assist outside working hours",
            "Opportunity to implement your own ideas and projects",
            "Stable employment based on contract or B2B agreement",
            "Company laptop and phone for private use",
            "No dress code",
        ],
    },
    2: {
        jobTitle: "Junior Sales Coordinator",
        locations: ["Warsaw", "Krakow"],
        employmentType: "Full-time",
        contractType: ["Employment contract"],
        responsibilities: [
            "Supporting the sales team in client communication",
            "Preparing documentation and price quotes",
            "Coordinating shipments with transport partners",
            "Updating client and shipment records",
            "Participating in client meetings",
        ],
        requirements: [
            "Some experience or internship in logistics or sales",
            "Good communication skills",
            "Basic knowledge of office software",
            "Teamwork skills and reliability",
        ],
        benefits: [
            "Mentoring and training opportunities",
            "Flexible work hours",
            "Company laptop",
            "Friendly team and supportive environment",
        ],
    },
    3: {
        jobTitle: "Generic Position Title",
        locations: ["City A", "City B"],
        employmentType: "Full-time or Part-time",
        contractType: ["Employment contract", "Contractor/B2B"],
        responsibilities: [
            "Handle daily tasks related to the role",
            "Coordinate with team members and clients",
            "Prepare reports and documentation",
            "Contribute to process improvement initiatives",
            "Support overall team objectives",
        ],
        requirements: [
            "Relevant experience or education in the field",
            "Strong communication and organizational skills",
            "Proficient with common office tools",
            "Ability to work independently and in a team",
            "Problem-solving mindset",
        ],
        benefits: [
            "Career development opportunities",
            "Flexible working hours",
            "Supportive team environment",
            "Competitive salary",
            "Company-provided equipment if required",
        ],
    },
} as Record<string, JobPosting>;

export type JobPosting = {
    jobTitle: string;
    locations: string[];
    employmentType: string;
    contractType: string[];
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
};
