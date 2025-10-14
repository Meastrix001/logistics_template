import { PageHeader } from "@/components/header/PageHeader";
import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Separator,
  Text,
} from "@radix-ui/themes";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactMap } from "./ContactMap/ContactMap";
import { ContactSocials } from "./ContactSocials/ContactSocials";
import { InViewWrapper } from "@/hooks/InViewWrapper";


export default function ContactPage() {


  return (
    <Container className="nav-correct" px={{ initial: "6", lg: "0" }}>
      <InViewWrapper direction="top">
        <Flex gap={"4"} direction={"column"} mb={"6"}>
          <PageHeader text="Contact us" size="l" />
          <Text>Reach us through any of the options below, we are happy to assist you with any questions.</Text>
        </Flex>
      </InViewWrapper>

      <Card>
        <Grid gap={{ initial: "4", lg: "7" }} p={{ initial: "1", md: "5" }}>

          <Grid columns={{ initial: "1", md: "6fr 0fr 6fr" }} gap={{ initial: "4", md: "9" }}>
            <InViewWrapper direction="left" delay={0.15}>
              <ContactForm />
            </InViewWrapper>

            <Separator orientation="vertical" size="4" color="green" style={{ width: "4px" }} />
            <InViewWrapper direction="right" delay={0.15}>
              <ContactSocials />
            </InViewWrapper>
          </Grid>

          <Flex align={"center"} justify={"center"}>
            <Separator size={"4"} color="green" style={{ height: "4px" }} />
          </Flex>

          <Box px={{ initial: "4", lg: "4" }} py={"3"}>
            <ContactMap />
          </Box>
        </Grid>
      </Card>
    </Container>
  );
}