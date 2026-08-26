import React from "react";

import { Link } from ".";
import "./styles.css";

export default {};
export const Component = () => (
  <>
    <div>
      <Link href="https://www.google.com">Default link</Link>
    </div>
    <div>
      <Link href="https://www.google.com" appearance="primary">
        Primary link
      </Link>
    </div>
    <div>
      <Link href="https://www.google.com" appearance="secondary">
        secondary link
      </Link>
    </div>
    <div>
      <Link href="https://www.google.com" target="_blank">
        Link opens new page
      </Link>
    </div>
    <div>
      <Link href="https://www.google.com" rel="noopener noreferrer nofollow">
        External link that that want web crawlers wont follow
      </Link>
    </div>
    <div>
      <Link href="https://www.google.com" textColor="text-dark">
        Link using different colours
      </Link>
    </div>
    <div>
      <Link href="https://www.google.com" textSize="xl">
        Link with extra large text
      </Link>
    </div>
    <div>
      <Link href="https://www.google.com" aria-label="google homepage">
        <img
          style={{ width: "80px", height: "30px" }}
          alt=""
          src={`https://rcl.assets.cancerresearchuk.org/images/logos/cruk-160.png`}
        />
      </Link>
    </div>
    <div>
      <Link
        href="#"
        onClick={() => {
          alert("from link");
        }}
      >
        With click handler
      </Link>
    </div>
  </>
);

export const CrukTheme = () => (
  <main data-theme="cruk">
    <Component />
  </main>
);

export const RflTheme = () => (
  <main data-theme="rfl">
    <Component />
  </main>
);

export const Su2cTheme = () => (
  <main data-theme="su2c">
    <Component />
  </main>
);

export const BowelbabeTheme = () => (
  <main data-theme="bowelbabe">
    <Component />
  </main>
);
