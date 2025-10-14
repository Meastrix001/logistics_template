import { InViewWrapper } from "@/hooks/InViewWrapper";
import { Flex, Text } from "@radix-ui/themes";

const AboutHistoryItems = [
        ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            laborum esse commodi fuga ipsum sint, repudiandae excepturi iure.
            Illo nemo sequi quam aliquid dignissimos rerum corporis eius
            laudantium recusandae aspernatur.`,
        ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            laborum esse commodi fuga ipsum sint, repudiandae excepturi iure.
            Illo nemo sequi quam aliquid dignissimos rerum corporis eius
            laudantium recusandae aspernatur.`,
        ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            laborum esse commodi fuga ipsum sint, repudiandae excepturi iure.
            Illo nemo sequi quam aliquid dignissimos rerum corporis eius
            laudantium recusandae aspernatur.`,
        ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            laborum esse commodi fuga ipsum sint, repudiandae excepturi iure.
            Illo nemo sequi quam aliquid dignissimos rerum corporis eius
            laudantium recusandae aspernatur.`,
        ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            laborum esse commodi fuga ipsum sint, repudiandae excepturi iure.
            Illo nemo sequi quam aliquid dignissimos rerum corporis eius
            laudantium recusandae aspernatur.`,
        ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            laborum esse commodi fuga ipsum sint, repudiandae excepturi iure.
            Illo nemo sequi quam aliquid dignissimos rerum corporis eius
            laudantium recusandae aspernatur.`,
        ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            laborum esse commodi fuga ipsum sint, repudiandae excepturi iure.
            Illo nemo sequi quam aliquid dignissimos rerum corporis eius
            laudantium recusandae aspernatur.`,
];

export const AboutHistory = () => {
        return (
                <Flex direction={"column"} gap={"4"}>
                        <InViewWrapper key={""} direction="bottom" delay={(0.25)}>
                                {AboutHistoryItems.map((item, idx) => {
                                        return <InViewWrapper key={""} direction="bottom" delay={(0.15 * idx)}>
                                                <Text key={""}>
                                                        {item}
                                                </Text>

                                        </InViewWrapper>
                                })}

                        </InViewWrapper>

                </Flex>
        );
};
