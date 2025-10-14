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
export const contactTeamData = {
    "Management": [
        {
            name: "Samantha Green",
            role: "Chief Executive Officer",
            image: "https://randomuser.me/api/portraits/women/12.jpg",
            contacts: [
                { key: "Email", Value: "samantha.green@company.com" },
                { key: "Phone", Value: "+1 (555) 234-9823" },
                { key: "Office", Value: "Building A, Room 301" }
            ]
        },
        {
            name: "Eve Green",
            role: "Chief Technical Officer",
            image: "https://randomuser.me/api/portraits/women/25.jpg",
            contacts: [
                { key: "Email", Value: "samantha.green@company.com" },
                { key: "Phone", Value: "+1 (555) 234-9823" },
                { key: "Office", Value: "Building A, Room 301" }
            ]
        },
        {
            name: "Marcus Liu",
            role: "Chief Operating Officer",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            contacts: [
                { key: "Email", Value: "marcus.liu@company.com" },
                { key: "Phone", Value: "+1 (555) 876-4421" },
                { key: "Office", Value: "Building A, Room 302" }
            ]
        },
        {
            name: "Rachel Kim",
            role: "Executive Assistant",
            image: "https://randomuser.me/api/portraits/women/55.jpg",
            contacts: [
                { key: "Email", Value: "rachel.kim@company.com" },
                { key: "Phone", Value: "+1 (555) 778-2109" },
                { key: "Slack", Value: "@rachel.k" }
            ]
        }
    ],

    "Sales": [
        {
            name: "Tina Morales",
            role: "Head of Sales",
            image: "https://randomuser.me/api/portraits/women/33.jpg",
            contacts: [
                { key: "Email", Value: "tina.morales@company.com" },
                { key: "Phone", Value: "+1 (555) 447-2219" },
                { key: "Office", Value: "Building B, Floor 2" }
            ]
        },
        {
            name: "Ethan Brooks",
            role: "Regional Sales Manager",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            contacts: [
                { key: "Email", Value: "ethan.brooks@company.com" },
                { key: "Phone", Value: "+1 (555) 331-7742" },
                { key: "Skype", Value: "ethan.brooks" }
            ]
        },
        {
            name: "Natalie Chen",
            role: "Sales Associate",
            image: "https://randomuser.me/api/portraits/women/41.jpg",
            contacts: [
                { key: "Email", Value: "natalie.chen@company.com" },
                { key: "Phone", Value: "+1 (555) 623-1199" },
                { key: "Slack", Value: "@nataliec" }
            ]
        }
    ],

    "Accounting": [
        {
            name: "Linda Tran",
            role: "Chief Financial Officer",
            image: "https://randomuser.me/api/portraits/women/29.jpg",
            contacts: [
                { key: "Email", Value: "linda.tran@company.com" },
                { key: "Phone", Value: "+1 (555) 982-4403" },
                { key: "Office", Value: "Building C, Room 115" }
            ]
        },
        {
            name: "George Patel",
            role: "Accounts Payable Specialist",
            image: "https://randomuser.me/api/portraits/men/52.jpg",
            contacts: [
                { key: "Email", Value: "george.patel@company.com" },
                { key: "Phone", Value: "+1 (555) 672-9084" },
                { key: "Slack", Value: "@georgep" }
            ]
        },
        {
            name: "Isabella Rossi",
            role: "Payroll Coordinator",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            contacts: [
                { key: "Email", Value: "isabella.rossi@company.com" },
                { key: "Phone", Value: "+1 (555) 112-8450" },
                { key: "Office", Value: "Building C, Room 120" }
            ]
        }
    ]
};
