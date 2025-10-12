"use client"
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";

export const LandingQuoteCTAButtons = () => {
    return (
        <>
            <Button size={{ initial: "2", md: "3" }} variant="solid">
                <Flex align={"center"} gap={"2"}>
                    Request Quote
                    <ArrowRightIcon />
                </Flex>
            </Button>

            <Button size={{ initial: "2", md: "3" }} variant="solid">
                <Flex align={"center"} gap={"2"}>
                    More info
                    <ArrowRightIcon />
                </Flex>
            </Button>
        </>
    );
};
