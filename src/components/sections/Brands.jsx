import React from "react";
import Title from "../shared/Title";
import Container from "../shared/Container";
import discordLogo from "../../assets/logos/discord.svg";
import openaiLogo from "../../assets/logos/openai.svg";
import paypalLogo from "../../assets/logos/paypal.svg";
import slackLogo from "../../assets/logos/slack.svg";
import spotifyLogo from "../../assets/logos/spotify.svg";
import facebookLogo from "../../assets/logos/facebook.svg";
import youtubeLogo from "../../assets/logos/youtube.svg";

const logoImages = {
  discord: discordLogo,
  openai: openaiLogo,
  paypal: paypalLogo,
  slack: slackLogo,
  spotify: spotifyLogo,
  facebook: facebookLogo,
  youtube: youtubeLogo,
};

function Brands() {
  return (
    <section>
      {""}
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>Trusted by Industry Leaders</Title>
        </div>
        <div className="flex justify-center flex-wrap gap-6">
          {Object.keys(logoImages).map((logo, key) => (
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
            >
              <img
                src={logoImages[logo]}
                alt={`${logo} logo`}
                className="h-15 w-auto ease-linear duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Brands;
