import { Box, Container, Flex, Grid, Heading, Section, Separator, Text } from "@radix-ui/themes"
import { LandingCareerCTA } from "./LandingCareerCTA"
import { InViewWrapper } from "@/hooks/InViewWrapper"

export const LandingCareer = () => {

    return <Container position={"relative"} className="txt-invert" px={"6"}>
        <Box className="bg" width={"100%"} height={"100%"} position={"absolute"} top={"0"} />
        <Section>
            <Grid columns={{ initial: "1", md: "2" }} py={"9"}>
                <InViewWrapper direction="right" delay={0.25}>
                    <Flex direction={"column"} gap={"3"}>
                        <Text size={"5"} weight={"bold"}>Open job offers</Text>
                        <Flex direction={"column"} width={"fit-content"}>
                            <Heading as="h2" size={"8"} className="txt-italic">Want to work us?</Heading>
                            <Separator size={"4"} color="green" style={{ height: "4px" }} />
                        </Flex>
                        <Text size={"5"}>Looking to work with us at one of our offices around the EU?</Text>
                        <Text size={"5"}>We offer competitive compensation and opportunities for professional development.</Text>
                        <LandingCareerCTA />
                    </Flex>
                </InViewWrapper>
                <Box />
            </Grid>
        </Section>
    </Container>


}