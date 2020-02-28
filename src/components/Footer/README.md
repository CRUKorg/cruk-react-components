# Footer

There should be only one footer component at the bottom of the body of each page.

### Try it out

```.jsx
  <React.Fragment>
    <Footer>
      <Link href="https://www.cancerresearchuk.org/about-us/contact-us"><Span fontSize="small" fontWeight="700">Contact us</Span></Link>
      <Link href="https://www.cancerresearchuk.org/privacy-statement"><Span fontSize="small" fontWeight="700">Privacy</Span></Link>
      <Link href="https://www.cancerresearchuk.org/about-us/contact-us"><Span fontSize="small" fontWeight="700">Contact us</Span></Link>
      <Link href="https://www.cancerresearchuk.org/privacy-statement"><Span fontSize="small" fontWeight="700">Privacy</Span></Link>
      <Link href="https://www.cancerresearchuk.org/about-us/contact-us"><Span fontSize="small" fontWeight="700">Contact us</Span></Link>
      <Link href="https://www.cancerresearchuk.org/privacy-statement"><Span fontSize="small" fontWeight="700">Privacy</Span></Link>
    </Footer>
  </React.Fragment>
```

## Props

| Name     | Type   | Options | Default | Description                              |
| :------- | :----- | :-----: | :------ | :--------------------------------------- |
| children | String |         |         | Used to place quick links inside the nav |
