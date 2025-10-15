import { InViewWrapper } from "@/hooks/InViewWrapper";
import {
    CubeIcon,
    HeartIcon,
    LightningBoltIcon,
    RocketIcon,
    StarIcon,
} from "@radix-ui/react-icons";
import { Card, Flex, Grid, Text } from "@radix-ui/themes";

export const LandingSalesPoints = () => {
    return (
        <Grid columns={{ initial: "1", md: "5" }} gap={"6"}>
            {mockData.map((item, i) => {

                return (
                    <InViewWrapper className="home-page__sp" key={`l-sp-${i}`} direction="bottom" delay={(i + 1) / 7}>
                        <Card variant="surface"  >
                            <Flex
                                direction="column"
                                align={"center"}
                                justify={"center"}
                                gap={"4"}
                                py={"5"}
                            >
                                {item.icon}
                                <Text align={"center"}>{item.text}</Text>
                            </Flex>
                        </Card>
                    </InViewWrapper>
                );
            })}
        </Grid>
    );
};

const iconWidth = 75;
const iconHeight = 75;

const mockData = [
    {
        icon: <CubeIcon color="brown" width={iconWidth} height={iconHeight} />,
        text: "A solution for every order",
    },
    {
        icon: <StarIcon color="gold" width={iconWidth} height={iconHeight} />,
        text: "Top track record and rating",
    },
    {
        icon: <HeartIcon color="red" width={iconWidth} height={iconHeight} />,
        text: "We offer support, help and advice",
    },
    {
        icon: <RocketIcon color="gold" width={iconWidth} height={iconHeight} />,
        text: "Fast and reliable delivery",
    },
    {
        icon: (
            <LightningBoltIcon color="green" width={iconWidth} height={iconHeight} />
        ),
        text: "Competitive pricing & offers",
    },
];
