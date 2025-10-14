import { PageHeader } from "@/components/header/PageHeader";
import { Box, Card, Container, Flex, Grid, Text } from "@radix-ui/themes";
import { AboutLegend } from "./AboutLegend/AboutLegend";
import { AboutHistory } from "./AboutHistory/AboutHistory";
import { InViewWrapper } from "@/hooks/InViewWrapper";

export default function About() {
  return (
    <Container className="nav-correct" px={{ initial: "6", lg: "0" }}>


      <InViewWrapper direction="top">
        <Flex gap={"4"} direction={"column"} mb={"6"}>
          <PageHeader text="About company" size="l" />
          <Text>learn about us and our history, and the road we took to get here.</Text>
        </Flex>
      </InViewWrapper>

      <Box mb={{ initial: "2", md: "9" }}>
        <Grid columns={{ initial: "1", lg: "2" }} gap={"4"}>
          <InViewWrapper direction="left">
            <Card>
              <Box p={"4"}>
                <AboutHistory />
              </Box>
            </Card>
          </InViewWrapper>

          <InViewWrapper direction="right">
            <Card>
              <Box p={"4"}>
                <AboutLegend />
              </Box>
            </Card>
          </InViewWrapper>
        </Grid>

      </Box>
    </Container>
  );
}
