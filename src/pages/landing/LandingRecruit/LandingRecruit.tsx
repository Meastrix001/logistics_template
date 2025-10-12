"use client"
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AspectRatio, Box, Button, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";

export const LandingRecruit = () => {
    return (
        <Grid columns={{ initial: "1", md: "2" }} align={"center"} gap={"9"}>
            <InViewWrapper direction="left" delay={0.15}>
                <Flex direction={"column"} gap={"4"}>

                    <Flex width={"fit-content"} direction={"column"}>
                        <Heading className="txt-italic" as="h2" size={"8"}>
                            Become a courier
                        </Heading>
                        <Separator size={"4"} color="green" style={{ height: "4px" }} />
                    </Flex>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur
                        eum fuga, delectus aliquam facilis eos corporis earum veritatis quos!
                        Pariatur ex laboriosam repellat enim inventore nihil suscipit dicta
                        assumenda.
                    </Text>

                    <InViewWrapper direction="bottom" delay={0.3}>
                        <Button size={{ initial: "2", md: "3" }} className="cursor">
                            <Flex align={"center"} gap={"2"}>
                                Find open jobs
                                <ArrowRightIcon />
                            </Flex>
                        </Button>

                    </InViewWrapper>
                </Flex>
            </InViewWrapper>

            <InViewWrapper direction="right" delay={0.15}>
                <Box className="shadow-top-right">
                    <AspectRatio ratio={16 / 12}>
                        <img
                            src="/static/landing/truck_fast.jpg"
                            alt="A house in a forest"
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                                borderRadius: "var(--radius-2)",
                            }}
                        />
                    </AspectRatio>
                </Box>
            </InViewWrapper>
        </Grid>
    );
};
