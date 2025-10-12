import { Box, Container, Grid, Section } from "@radix-ui/themes"
import { QuoteForm } from "./QuoteForm/QuoteForm"
import { QuoteDescription } from "./QuoteDescription/QuoteDescription"
import { InViewWrapper } from "@/hooks/InViewWrapper"

export const QuotePage = () => {

    return <Container className="nav-correct" px={{ initial: "6", lg: "0" }}>

        <Box>
            <Grid columns={{ initial: "1", lg: "2" }} gap={{ initial: "0", lg: "9" }}>

                <Section size={{ initial: "1", lg: "4" }}>
                    <InViewWrapper direction="left" delay={0.15}>
                        <QuoteDescription />
                    </InViewWrapper>
                </Section>

                <Section size={{ initial: "1", lg: "4" }}>
                    <InViewWrapper direction="right" delay={0.15}>
                        <QuoteForm />
                    </InViewWrapper>
                </Section>
            </Grid>
        </Box>
    </Container>
}