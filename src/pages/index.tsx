import { Box, Image, Text, Flex, Icon, Button, Link } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { MainLayout } from "../layouts/MainLayout";
import propic from "../images/eric.jpg";
import ggbridge from "../images/ggbridge.png";

// markup
const IndexPage = () => {
  return (
    <MainLayout>
      <Box>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={["column-reverse", null, "row"]}
        >
          <Box>
            <Text fontSize={"36px"} fontWeight={"bold"}>
              Hi! I'm Eric
            </Text>
            <Text marginTop={"24px"} fontSize={"24px"} color={"gray"}>
              I'm a software engineer at{" "}
              <Link href="https://www.nitra.com/">
                <Text fontWeight={"bold"} display="inline" color="#844DFF">
                  Nitra
                </Text>
              </Link>{" "}
              based in San Francisco
              <Image
                src={ggbridge}
                height={"36px"}
                display="inline"
                marginLeft="4px"
                verticalAlign={"text-bottom"}
                alt="golden gate bridge icon"
              />
            </Text>
            <Text marginTop={"24px"} fontSize={"24px"} color={"gray"}>
              In my free time, I enjoy climbing, collecting mechanical
              keyboards, and playing Call of Duty: Warzone
            </Text>
          </Box>
          <Image borderRadius="full" boxSize="300px" src={propic} />
        </Flex>
      </Box>
    </MainLayout>
  );
};

export default IndexPage;
