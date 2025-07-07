import { github, linkedin, code_tag, facebook } from "../assets";

export const socialLink = (icon) => {
    icon === github
        ? window.open("https://github.com/Chedysoltani", "_blank")
        : icon === linkedin
        ? window.open(
              "https://www.linkedin.com/in/soltani-chedy-08b984254/",
              "_blank"
          )
        : icon === code_tag
        ? window.open(
              "https://developers.google.com/profile/u/Chedysoltani",
              "_blank"
          )
       
        
        : null;
};

export const stringUrl = (text) => {
    text === "@Google Developers Summit Tunisia - GDS"
        ? window.open(
              "https://www.linkedin.com/company/google-community-summit-tn/",
              "_blank"
          )
        : text === "@AI Hack Tunisia 2022 ( Organizers Team )"
        ? window.open("https://ai-hack-tunisia.com/", "_blank")
        : text === "@GDG RANDOTEK ( First edition )"
        ? window.open(
              "https://www.facebook.com/events/903171040390540/903172823723695/",
              "_blank"
          )
        : text === "@Google Developer Groups - Béja"
        ? window.open("https://www.linkedin.com/company/gdg-beja/", "_blank")
        : text === "@GO MY CODE Center ( 1 months )"
        ? window.open("https://gomycode.com/tn/", "_blank")
        : text === "@Tunisie Telecom"
        ? window.open("https://www.tunisietelecom.tn/particulier", "_blank")
        : null;
};

export const CertificationLink = (idx) => {
    idx === 0
        ? window.open(
              "https://drive.google.com/file/d/1vg0MkzpmdhbZiuIkKwadTba-9GaCXvT0/view?usp=drive_link",
              "_blank"
          )
        : idx === 1
        ? window.open(
              "https://drive.google.com/file/d/1cRAz17bgOQcpjkzq3pS-IM5E6UbYJktk/view?usp=drive_link",
              "_blank"
          )
       
       
      
        
       
       
        : null;
};

export const credlyLinks = (idx) => {
    const links = [
        "https://www.credly.com/badges/d0c29710-03ed-45ae-b0d0-ef64c4cd6110/public_url",
        "https://www.credly.com/badges/f25049b5-4ad3-4d0b-b104-9adb870d6ec9/public_url",
        "https://www.credly.com/badges/f7836436-9e21-408a-a55d-23c494b3441a/public_url",
    ];

    if (links[idx]) {
        window.open(links[idx], "_blank");
    } else {
        console.error("Invalid index for credly link");
    }
};
