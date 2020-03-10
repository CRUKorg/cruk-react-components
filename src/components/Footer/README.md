# Footer

There should be only one footer component at the bottom of the body of each page.

### Try it out

```.jsx
  <React.Fragment>
    <Footer>
      <Link href="https://www.cancerresearchuk.org/about-us/contact-us">Contact us</Link>
      <Link href="https://www.cancerresearchuk.org/privacy-statement">Privacy</Link>
      <Link href="https://www.cancerresearchuk.org/about-us/contact-us">Contact us</Link>
      <Link href="https://www.cancerresearchuk.org/privacy-statement">Privacy</Link>
      <Link href="https://www.cancerresearchuk.org/about-us/contact-us">Contact us</Link>
      <Link href="https://www.cancerresearchuk.org/privacy-statement">Privacy</Link>
    </Footer>
  </React.Fragment>
```

## Props

| Name     | Type   | Options | Default | Description                              |
| :------- | :----- | :-----: | :------ | :--------------------------------------- |
| children | String |         |         | Used to place quick links inside the nav |
