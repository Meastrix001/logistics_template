"use client"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Button, Flex } from "@radix-ui/themes"

export const LandingCareerCTA = () => {
    return <Button>
        <Flex align={"center"}>
            Find jobs
            <ArrowRightIcon />
        </Flex>

    </Button>
}