import { Box, Container, Flex, Grid, Text } from "@radix-ui/themes"
import { QuoteForm } from "./QuoteForm/QuoteForm"
import { QuoteDescription } from "./QuoteDescription/QuoteDescription"
import { InViewWrapper } from "@/hooks/InViewWrapper"
import { PageHeader } from "@/components/header/PageHeader"

export const QuotePage = () => {

    return <Container className="nav-correct" px={{ initial: "6", lg: "0" }}>

        <InViewWrapper direction="top">
            <Flex gap={"4"} direction={"column"} mb={"9"}>
                <PageHeader text="Request a offer" size="l" />
                <Text>Send us basic information on your transport request, and we will send you a offer.</Text>
            </Flex>
        </InViewWrapper>

        <Box>
            <Grid columns={{ initial: "1", lg: "2" }} gap={{ initial: "7", lg: "9" }}>

                <Box>
                    <InViewWrapper direction="left" delay={0.15}>
                        <QuoteDescription />
                    </InViewWrapper>
                </Box>

                <Box>
                    <InViewWrapper direction="right" delay={0.15}>
                        <QuoteForm />
                    </InViewWrapper>
                </Box>
            </Grid>
        </Box>
    </Container>
}