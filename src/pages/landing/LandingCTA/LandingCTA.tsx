"use client"

import { InViewWrapper } from "@/hooks/InViewWrapper"
import { Flex, Button } from "@radix-ui/themes"
import Link from "next/link"


const CTAS = [
    {
        text: "Request a Quote",
        link: "",
        variant: "solid",
        color: "green",
        Direction: "left"
    },
    {
        text: "Become a Carrier",
        link: "",
        variant: "outline",
        color: "green",
        Direction: "bottom"
    },
    {
        text: "Career openings",
        link: "",
        variant: "soft",
        color: "green",
        Direction: "right"
    },
]

export const LandingCTA = () => {

    return <Flex gap="5" align={"center"} justify={"center"} direction={{ initial: "column", md: "row" }} >

        {CTAS.map((cta, i) => {
            return <InViewWrapper key={""} delay={(0.1 + i) / 10} direction={cta.Direction as "top"}>
                <Link href={cta.link} passHref >
                    <Button size={"4"} variant={cta.variant as "solid"} color={cta.color as "green"} className="cursor" >
                        {cta.text}
                    </Button>
                </Link>
            </InViewWrapper>
        })}


    </Flex>
}