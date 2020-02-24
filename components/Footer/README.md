# Footer

There should be only one footer component at the bottom of the body of each page.

### Try it out

```.jsx
  <React.Fragment>
    <Footer>
      <A href="https://www.cancerresearchuk.org/about-us/contact-us"><Span fontSize="small" fontWeight="700">Contact us</Span></A>
      <A href="https://www.cancerresearchuk.org/privacy-statement"><Span fontSize="small" fontWeight="700">Privacy</Span></A>
      <A href="https://www.cancerresearchuk.org/about-us/contact-us"><Span fontSize="small" fontWeight="700">Contact us</Span></A>
      <A href="https://www.cancerresearchuk.org/privacy-statement"><Span fontSize="small" fontWeight="700">Privacy</Span></A>
      <A href="https://www.cancerresearchuk.org/about-us/contact-us"><Span fontSize="small" fontWeight="700">Contact us</Span></A>
      <A href="https://www.cancerresearchuk.org/privacy-statement"><Span fontSize="small" fontWeight="700">Privacy</Span></A>
    </Footer>
  </React.Fragment>
```

## Props

| Name     | Type   | Options | Default | Description                              |
| :------- | :----- | :-----: | :------ | :--------------------------------------- |
| children | String |         |         | Used to place quick links inside the nav |
