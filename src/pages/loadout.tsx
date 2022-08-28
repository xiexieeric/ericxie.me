import {
  Box,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import * as React from "react";
import { MainLayout } from "../layouts/MainLayout";

// markup
function LoadoutPage() {
  return (
    <MainLayout>
      <Heading fontSize="4xl" fontWeight={"bold"} marginY="16px">
        The Loadout
      </Heading>
      <p className="Text-sm-black">
        This is where you'll find the gear that I use for my various hobbies.
      </p>
      <Heading fontSize="2xl" marginY="16px">
        Tech
      </Heading>
      <UnorderedList spacing={1}>
        <ListItem>
          <strong>Phone:</strong> Samsung Galaxy S21 Ultra
        </ListItem>
        <ListItem>
          <strong>Laptop:</strong> M1 Macbook Pro 16 2021
        </ListItem>
        <ListItem>
          <strong>Desktop</strong>
        </ListItem>
        <UnorderedList spacing={1}>
          <ListItem>CPU: AMD Ryzen 9 5900X</ListItem>
          <ListItem>Motherboard: ASRock B550I Phantom Gaming</ListItem>
          <ListItem>RAM: G.Skill Ripjaws 16GB(2x8) C18</ListItem>
          <ListItem>SSD: Samsung 970 Evo Plus 1TB M.2</ListItem>
          <ListItem>GPU: ASUS RTX 3080 TUF Gaming</ListItem>
          <ListItem>PSU: Corsair SF750</ListItem>
          <ListItem>Case: Coolermaster NR200</ListItem>
          <ListItem>CPU Cooler: Noctua C14S</ListItem>
        </UnorderedList>
        <ListItem>
          <strong>Monitor:</strong> Alienware AW3418DW
        </ListItem>
        <ListItem>
          <strong>Mouse:</strong> Logitech G305
        </ListItem>
        <ListItem>
          <strong>Mic:</strong> Blue Snowball
        </ListItem>
        <ListItem>
          <strong>Headphones:</strong> Sennheiser HD558
        </ListItem>
        <ListItem>
          <strong>Speakers:</strong> Bose Companion 2
        </ListItem>
      </UnorderedList>
      <Heading fontSize="2xl" marginY="16px">
        Keyboards
      </Heading>
      <UnorderedList spacing={1}>
        <ListItem>
          <strong>ai03 Vega</strong>
        </ListItem>
        <UnorderedList spacing={1}>
          <ListItem>Switches: Glorious Pandas lubed w/ Krytox 205g0</ListItem>
          <ListItem>Keycaps: GMK Hammerhead Dark</ListItem>
        </UnorderedList>
        <ListItem>
          <strong>KBD8X MKII</strong>
        </ListItem>
        <UnorderedList spacing={1}>
          <ListItem>Switches: Stock Zealios V2 67g</ListItem>
          <ListItem>Keycaps: ePBT Cool Kids</ListItem>
        </UnorderedList>
        <ListItem>
          <strong>Exclusive E7 V2</strong>
        </ListItem>
        <UnorderedList spacing={1}>
          <ListItem>Switches: Factory Lubed NK Silk Yellows</ListItem>
          <ListItem>Keycaps: SA Mizu</ListItem>
        </UnorderedList>
        <ListItem>
          <strong>NK65 Milkshake Edition</strong>
        </ListItem>
        <UnorderedList spacing={1}>
          <ListItem>Switches: Factory Lubed NK Silk Yellows</ListItem>
          <ListItem>Keycaps: Cherry Profile Milkshake Keycaps</ListItem>
        </UnorderedList>
      </UnorderedList>
      <Heading fontSize="2xl" marginY="16px">
        Skiing
      </Heading>
      <UnorderedList spacing={1}>
        <ListItem>
          <strong>Atomic Bent Chetler 100</strong>
        </ListItem>
        <UnorderedList spacing={1}>
          <ListItem>Bindings: Tyrolia Attack 13</ListItem>
        </UnorderedList>
        <ListItem>
          <strong>Atomic Vantage X 80 CTI</strong>
        </ListItem>
        <UnorderedList spacing={1}>
          <ListItem>Bindings: Atomic Warden</ListItem>
        </UnorderedList>
      </UnorderedList>
      <Heading fontSize="2xl" marginY="16px">
        Music
      </Heading>
      <UnorderedList spacing={1}>
        <ListItem>Yamaha F700S Acoustic</ListItem>
        <ListItem>Taylor GS Mini Koa Electro-Acoustic</ListItem>
        <ListItem>Fender Player Plus Stratocaster</ListItem>
        <ListItem>
          <strong>Amp:</strong> Vox VT20
        </ListItem>
        <ListItem>
          <strong>Mic:</strong> Audio Technica AT2035
        </ListItem>
        <ListItem>
          <strong>Audio Interface:</strong> Audient Evo4
        </ListItem>
      </UnorderedList>
    </MainLayout>
  );
}

export default LoadoutPage;
