# Footer

There should be only one footer component at the bottom of the body of each page.

### Try it out

```.jsx
  <>
    <Footer>
      <Link appearance="secondary" href="https://www.cancerresearchuk.org/about-us/contact-us">Contact us</Link>
      <Link appearance="secondary" href="https://www.cancerresearchuk.org/privacy-statement">Privacy</Link>
    </Footer>

    <Footer alignCopyText="right">
      <Link appearance="secondary" href="https://www.cancerresearchuk.org/about-us/contact-us">Contact us</Link>
      <Link appearance="secondary" href="https://www.cancerresearchuk.org/privacy-statement">Privacy</Link>
    </Footer>
  </>
```

## Props

| Name          | Type   |       Options       | Default | Description                              |
| :------------ | :----- | :-----------------: | :------ | :--------------------------------------- |
| children      | String |                     |         | Used to place quick links inside the nav |
| alignCopyText | String | left, center, right | left    | Used to align the copyright text         |
