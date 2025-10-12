import { Box, Flex, Section, Container } from "@radix-ui/themes";
import { LandingCTA } from "./LandingCTA/LandingCTA";
import { VideoSlider } from "./VideoSlider/VideoSlider";
import { LandingSummary } from "./LandingSummary/LandingSummary";
import { LandingSalesPoints } from "./LandingSalesPoints/LandingSalesPoints";
import { LandingQuoteCTA } from "./LandingQuoteCTA/LandingQuoteCTA";
import { LandingRecruit } from "./LandingRecruit/LandingRecruit";
import { LandingCareer } from "./LandingCareer/LandingCareer";
import { LandingMap } from "./LandingMap/LandingMap";

export default function HomePage() {
  return (
    <Box>
      <VideoSlider />
      <Container px={"6"}>

        <Box className="home-page">
          {/* Slider */}

          <Box className="hero">
            <Flex
              direction="column"
              align="center"
              justify="center"
              className="hero-inner"
            >
              {/* CTA buttons */}
              <Section size={"1"}>
                <LandingCTA />
              </Section>

              {/* Summary section */}
              <Section size={{ initial: "2", lg: "4" }}>
                <LandingSummary />
              </Section>

              {/* Sales points */}
              <Section size={{ initial: "2", lg: "4" }}>
                <LandingSalesPoints />
              </Section>
            </Flex>
          </Box>
        </Box>
      </Container>

      {/* Contact Quote */}
      <Section size={{ initial: "2", lg: "4" }}>
        <LandingQuoteCTA />
      </Section>

      {/* CTA Recruit */}
      <Container px={"6"}>
        <Section size={{ initial: "2", lg: "4" }}>
          <LandingRecruit />
        </Section>
      </Container>

      {/* Career */}
      <Section size={{ initial: "2", lg: "4" }} className="home-page__career" >
        <LandingCareer />
      </Section>


      {/* Map */}
      <Container px={"6"}>
        <Section size={{ initial: "2", lg: "4" }}>
          <LandingMap />
        </Section>
      </Container>

    </Box>
  );
}
