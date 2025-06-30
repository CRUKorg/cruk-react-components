import React from "react";
import {
  faFacebookMessenger,
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

import PopOver from ".";
import Box from "../Box";
import Button from "../Button";
import IconFa from "../IconFa";

export function TestPopOverWithContent() {
  return (
    <PopOver
      modalLabel="sharing options"
      position="bottom"
      modalContent={
        <Box padding="xxs">
          <Button appearance="tertiary" aria-label="Facebook">
            <IconFa faIcon={faFacebookSquare} color="#4267b2" size="1.5rem" />
          </Button>
          <Button appearance="tertiary" aria-label="Twitter">
            <IconFa faIcon={faTwitterSquare} color="#1da1f2" size="1.5rem" />
          </Button>
          <Button appearance="tertiary" aria-label="WhatsApp">
            <IconFa faIcon={faWhatsappSquare} color="#4dc247" size="1.5rem" />
          </Button>
          <Button appearance="tertiary" aria-label="Facebook Messenger">
            <IconFa
              faIcon={faFacebookMessenger}
              color="#288ef8"
              size="1.5rem"
            />
          </Button>
          <Button appearance="tertiary" aria-label="LinkedIn">
            <IconFa faIcon={faLinkedin} color="#0077b5" size="1.5rem" />
          </Button>
          <Button appearance="tertiary" aria-label="Email">
            <IconFa faIcon={faEnvelopeSquare} color="#00b6ed" size="1.5rem" />
          </Button>
        </Box>
      }
      minWidth="23em"
    >
      <Button>
        <IconFa faIcon={faShareAlt} />
        Share
      </Button>
    </PopOver>
  );
}
