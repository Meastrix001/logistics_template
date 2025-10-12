import {
    Box,
    Container,
    Flex,
    Grid,
    Text,
} from "@radix-ui/themes";
import { LandingQuoteCTAButtons } from "./LandingQuoteCTAButtons";
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { PageHeader } from "@/components/header/PageHeader";

export const LandingQuoteCTA = () => {
    return (
        <Grid
            columns={{ initial: "1", md: "3fr 6fr 3fr" }}
            rows={{ initial: "3fr 6fr 3fr", md: "1" }}
            gap={"4"}
            style={{ backgroundColor: "gray" }}
            className="txt-invert"
        >
            <InViewWrapper direction="left" delay={.35}>
                <Box
                    height={"100%"}
                    style={{
                        backgroundImage: `url("/static/landing/trucks_1.jpg")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />

            </InViewWrapper>

            <Container px={"6"}>
                <InViewWrapper direction="bottom">
                    <Flex
                        gap={"6"}
                        justify={"center"}
                        direction={"column"}
                        py={"9"}
                    >
                        <PageHeader size="m" text="International & local transport services" />
                        <Text as="p" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                            ipsam necessitatibus! Voluptates nesciunt nihil recusandae dolorem
                            ullam amet!
                        </Text>

                        <Flex width={"100%"} justify={"between"}>
                            <LandingQuoteCTAButtons />
                        </Flex>
                    </Flex>
                </InViewWrapper>
            </Container>

            <InViewWrapper direction="right" delay={.35}>
                <Box
                    height={"100%"}
                    style={{
                        backgroundImage: `url("/static/landing/road_2.jpg")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </InViewWrapper>
        </Grid>
    );
};
