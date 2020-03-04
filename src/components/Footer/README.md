# Footer

There should be only one footer component at the bottom of the body of each page.

### Try it out

```.jsx
  <React.Fragment>
    <Footer>
      <Link href="https://www.cancerresearchuk.org/about-us/contact-us"><Text as="span" textSize="small" textWeight="700">Contact us</Text></Link>
      <Link href="https://www.cancerresearchuk.org/privacy-statement"><Text as="span" textSize="small" textWeight="700">Privacy</Text></Link>
      <Link href="https://www.cancerresearchuk.org/about-us/contact-us"><Text as="span" textSize="small" textWeight="700">Contact us</Text></Link>
      <Link href="https://www.cancerresearchuk.org/privacy-statement"><Text as="span" textSize="small" textWeight="700">Privacy</Text></Link>
      <Link href="https://www.cancerresearchuk.org/about-us/contact-us"><Text as="span" textSize="small" textWeight="700">Contact us</Text></Link>
      <Link href="https://www.cancerresearchuk.org/privacy-statement"><Text as="span" textSize="small" textWeight="700">Privacy</Text></Link>
    </Footer>
  </React.Fragment>
```

## Props

| Name     | Type   | Options | Default | Description                              |
| :------- | :----- | :-----: | :------ | :--------------------------------------- |
| children | String |         |         | Used to place quick links inside the nav |
