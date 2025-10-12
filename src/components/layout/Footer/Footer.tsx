
import { Box, Container, Flex, Grid, Heading, Section, Separator, Text } from "@radix-ui/themes";
import { brand } from "@/theme/brand.config";
import { FooterData } from "@/constants/footerData";
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher";

export default function Footer() {

  return (
    <Flex direction="column">
      <Section className="footer txt-invert">
        <Container py={{ initial: "6", lg: "4" }} px={{ initial: "4", lg: "0" }}>
          <Flex direction="column" gap="5">
            <Grid
              columns={{ initial: "1", lg: "4fr 3fr 3fr 3fr" }}
              justify={{ initial: "center", lg: "between" }}
              gap="9"
            >
              <Flex direction="column" gap="4">
                <Heading as="h4" size="6">Company Logo</Heading>

                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae aspernatur deserunt tenetur! A natus ad error corporis
                  quod asperiores soluta temporibus libero sunt, rem amet,
                  dignissimos vitae placeat deleniti nam.
                </Text>
              </Flex>

              {FooterData.map((col, idx) => (
                <Flex key={col.title + idx} direction="column" gap="4">
                  <Box>
                    {col.title && <Heading as="h5" size="5" mb={"1"}>{col.title}</Heading>}
                    <Separator size={"4"} color="green" style={{ height: "4px" }} />
                  </Box>

                  <Box>
                    {col.items.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        {item.icon}
                        {item.link ? (
                          <a href={item.link}>{item.value}</a>
                        ) : (
                          <Text size="4">{item.value}</Text>
                        )}
                      </li>
                    ))}
                  </Box>
                </Flex>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>

      <Flex direction={"row"} wrap={"wrap"} className="footer__cpr txt-invert" py="6" align="center" justify="between" gap="2">
        <Container align={"center"}>
          <Flex direction={{ initial: "column", md: "row" }} align={"center"} justify={"between"} wrap={"wrap"}>

            <Text size="2">
              &copy; {new Date().getFullYear()} {brand.company.name}. All rights reserved.
            </Text>
            <LanguageSwitcher />
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
}
