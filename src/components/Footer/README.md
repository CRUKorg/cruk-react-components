# Footer

There should be only one footer component at the bottom of the body of each page.

### Try it out

```.jsx
  <>
    <Footer>
      <Link appearance="secondary" href="https://www.cancerresearchuk.org/about-us/contact-us">Contact us</Link>
      <Link appearance="secondary" href="https://www.cancerresearchuk.org/privacy-statement">Privacy</Link>
    </Footer>

     <Footer copyText="Cancer Research UK is a registered charity in England and Wales (1089464), Scotland (SC041666), the Isle of Man (1103) and Jersey (247). A company limited by guarantee. Registered company in England and Wales (4325234) and the Isle of Man (5713F).">
      <Link appearance="secondary" href="https://www.cancerresearchuk.org/about-us/contact-us">Contact us</Link>
      <Link appearance="secondary" href="https://www.cancerresearchuk.org/privacy-statement">Privacy</Link>
    </Footer>
  </>
```

## Props

| Name     | Type   | Options | Default | Description                              |
| :------- | :----- | :-----: | :------ | :--------------------------------------- |
| children | String |         |         | Used to place quick links inside the nav |
| copyText | String |         |         | Used to change the copyright text        |
