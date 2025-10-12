import { HomeIcon, MobileIcon, EnvelopeClosedIcon, ArrowRightIcon } from "@radix-ui/react-icons";

// const iconWidth = 20
// const iconHeigth = 20
// const color = "green"

const iconProps = {
    width: 20,
    height: 20,
    color: "green",
}
export const FooterData = [
    {
        title: "Company",
        items: [
            {
                icon: <HomeIcon {...iconProps} />,
                value: "Legal Address",
                link: null,
            },
            {
                icon: <MobileIcon {...iconProps} />,
                value: "+123 456 789 00",
                link: null,
            },
            {
                icon: <EnvelopeClosedIcon {...iconProps} />,
                value: "company@gmail.com",
                link: null,
            },
        ],
    },
    {
        title: "Work",
        items: [
            { icon: <ArrowRightIcon {...iconProps} />, value: "Customers", link: null },
            { icon: <ArrowRightIcon {...iconProps} />, value: "Business", link: null },
            { icon: <ArrowRightIcon {...iconProps} />, value: "Career", link: null },
            { icon: <ArrowRightIcon {...iconProps} />, value: "Contact", link: null },
        ],
    },
    {
        title: "Info",
        items: [
            { icon: <ArrowRightIcon {...iconProps} />, value: "About", link: null },
            { icon: <ArrowRightIcon {...iconProps} />, value: "Privacy Policy", link: null },
            { icon: <ArrowRightIcon {...iconProps} />, value: "Terms and Conditions", link: null },
            { icon: <ArrowRightIcon {...iconProps} />, value: "Other Services", link: null },
        ],
    },
];
