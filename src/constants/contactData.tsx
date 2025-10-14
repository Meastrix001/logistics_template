import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const contactData = [
    {
        title: "Email address",
        value: "company@mail.com",
        icon: ""
    },
    {
        title: "Fax",
        value: "+123 456 789 00",
        icon: ""
    },
    {
        title: "Phone",
        value: "+123 456 789 00",
        icon: ""
    },
]

export const contactSocials = [
    {
        icon: <FaFacebook width={20} height={20} />,
        link: ""
    },
    {
        icon: <FaInstagram width={20} height={20} />,
        link: ""
    },
    {
        icon: <FaLinkedin width={20} height={20} />,
        link: ""
    },
]
export type ContactItem = {
    name: string;
    role: string;
    image: string;
    contacts: ContactKeyValue[];
};

export type ContactKeyValue = {
    key: string;
    value: string;
}
export type ContactData = Record<string, ContactItem[]>;

export const contactTeamData: ContactData = {
    Management: [
        {
            name: "Samantha Green",
            role: "Chief Executive Officer",
            image: "https://randomuser.me/api/portraits/women/12.jpg",
            contacts: [
                { key: "Email", value: "samantha.green@company.com" },
                { key: "Phone", value: "+1 (555) 234-9823" },
                { key: "Office", value: "Building A, Room 301" },
            ],
        },
        {
            name: "Eve Green",
            role: "Chief Technical Officer",
            image: "https://randomuser.me/api/portraits/women/25.jpg",
            contacts: [
                { key: "Email", value: "eve.green@company.com" },
                { key: "Phone", value: "+1 (555) 234-9823" },
                { key: "Office", value: "Building A, Room 301" },
            ],
        },
        {
            name: "Marcus Liu",
            role: "Chief Operating Officer",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            contacts: [
                { key: "Email", value: "marcus.liu@company.com" },
                { key: "Phone", value: "+1 (555) 876-4421" },
                { key: "Office", value: "Building A, Room 302" },
            ],
        },
        {
            name: "Rachel Kim",
            role: "Executive Assistant",
            image: "https://randomuser.me/api/portraits/women/55.jpg",
            contacts: [
                { key: "Email", value: "rachel.kim@company.com" },
                { key: "Phone", value: "+1 (555) 778-2109" },
                { key: "Slack", value: "@rachel.k" },
            ],
        },
    ],

    Sales: [
        {
            name: "Tina Morales",
            role: "Head of Sales",
            image: "https://randomuser.me/api/portraits/women/33.jpg",
            contacts: [
                { key: "Email", value: "tina.morales@company.com" },
                { key: "Phone", value: "+1 (555) 447-2219" },
                { key: "Office", value: "Building B, Floor 2" },
            ],
        },
        {
            name: "Ethan Brooks",
            role: "Regional Sales Manager",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            contacts: [
                { key: "Email", value: "ethan.brooks@company.com" },
                { key: "Phone", value: "+1 (555) 331-7742" },
                { key: "Skype", value: "ethan.brooks" },
            ],
        },
        {
            name: "Natalie Chen",
            role: "Sales Associate",
            image: "https://randomuser.me/api/portraits/women/41.jpg",
            contacts: [
                { key: "Email", value: "natalie.chen@company.com" },
                { key: "Phone", value: "+1 (555) 623-1199" },
                { key: "Slack", value: "@nataliec" },
            ],
        },
    ],

    Accounting: [
        {
            name: "Linda Tran",
            role: "Chief Financial Officer",
            image: "https://randomuser.me/api/portraits/women/29.jpg",
            contacts: [
                { key: "Email", value: "linda.tran@company.com" },
                { key: "Phone", value: "+1 (555) 982-4403" },
                { key: "Office", value: "Building C, Room 115" },
            ],
        },
        {
            name: "George Patel",
            role: "Accounts Payable Specialist",
            image: "https://randomuser.me/api/portraits/men/52.jpg",
            contacts: [
                { key: "Email", value: "george.patel@company.com" },
                { key: "Phone", value: "+1 (555) 672-9084" },
                { key: "Slack", value: "@georgep" },
            ],
        },
        {
            name: "Isabella Rossi",
            role: "Payroll Coordinator",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            contacts: [
                { key: "Email", value: "isabella.rossi@company.com" },
                { key: "Phone", value: "+1 (555) 112-8450" },
                { key: "Office", value: "Building C, Room 120" },
            ],
        },
    ],
};
