import { PageHeader } from "@/components/header/PageHeader";
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { Container, Flex, Grid, Section, Text } from "@radix-ui/themes";
import { JobsOverviewList } from "./JobsOverviewList/JobsOverviewList";


export const JobsPage = () => {
  return (
    <Container className="nav-correct" px={{ initial: "6", lg: "0" }}>
      <Grid columns={"2"}>
        <Flex direction={"column"}>
          <InViewWrapper direction="top">
            <Flex gap={"4"} direction={"column"} mb={"6"}>
              <PageHeader text="Work with us" size="l" />
              <Text as="p" size={"5"} weight={"bold"}>Looking for work or want a change of scenery? Reach out and build a future.</Text>
            </Flex>
          </InViewWrapper>

          <Flex gap={"3"} direction={"column"}>
            <InViewWrapper direction="top" delay={0.10}>
              <Text>Would you like to work for one of the <Text weight={"bold"}>fastest-growing companies</Text> in the logistics industry?
                Explore our open positions and become part of our success story.</Text>
              <Text>Our people are the driving force behind our growth. Their dedication ensures outstanding service quality and lasting client relationships. Join our team and help us reach new heights.</Text>
              <Text>We offer great opportunities for career development, flexibility in workplace location, and competitive</Text>
            </InViewWrapper>
          </Flex>
        </Flex>

      </Grid>

      <Section>
        <JobsOverviewList />
      </Section>


    </Container>
  );
}
