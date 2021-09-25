import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>Придумать описание</SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/Timur0895")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
