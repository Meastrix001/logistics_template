import { Card, Box, Flex, Text } from "@radix-ui/themes"

export const QuoteDescription = () => {
    return <Card className="shadow-top-left">
        <Box p={"4"}>
            <Flex direction={"column"} gap={"4"}>
                <Text> Fill in the form with your details, and we will send you a competitive offer based on the given information</Text>

                <Box>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum consequatur, modi natus excepturi quibusdam ipsa laborum nobis deserunt alias consequuntur corporis numquam! Et facilis laudantium dolorum? Pariatur, ducimus optio.
                </Box>
                <Box>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum consequatur, modi natus excepturi quibusdam ipsa laborum nobis deserunt alias consequuntur corporis numquam! Et facilis laudantium dolorum? Pariatur, ducimus optio.
                </Box>
                <Box>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum consequatur, modi natus excepturi quibusdam ipsa laborum nobis deserunt alias consequuntur corporis numquam! Et facilis laudantium dolorum? Pariatur, ducimus optio.
                </Box>
            </Flex>

        </Box>

    </Card>
}