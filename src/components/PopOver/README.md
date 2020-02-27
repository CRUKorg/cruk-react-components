# PopOver

#### Use PopOver for giving extra context AND to make visual cues accessible

Popover is a non-modal dialog that floats around its disclosure. It's
commonly used for displaying additional rich content on top of something.

### Try them out

```.jsx
function () {
  const content = (<>
    <Button icon="facebookSquare" appearance="link" css="color: #4267b2" size="large" />
    <Button icon="twitterSquare" appearance="link" css="color: #1da1f2" size="large" />
    <Button icon="whatsappSquare" appearance="link" css="color: #4dc247" size="large" />
    <Button icon="messengerSquare" appearance="link" css="color: #288ef8" size="large" />
    <Button icon="linkedin" appearance="link" css="color: #0077b5" size="large" />
    <Button icon="envelopeSquare" appearance="link" css="color: #00b6ed" size="large" />
  </>);

  return (
    <>
      <PopOver overlay={content}>
        <Button icon="share" appearance="secondary">Share top</Button>
      </PopOver>
      <PopOver position="bottom" overlay={content}>
        <Button icon="share" appearance="secondary">Share bottom</Button>
      </PopOver>
      <PopOver position="left" overlay={content}>
        <Button icon="share" appearance="link" css={`color: #ec008c;`}>Share left</Button>
      </PopOver>
      <PopOver position="right" overlay={content}>
        <Button icon="share" appearance="link" css={`color: #ec008c;`}>Share right</Button>
      </PopOver>
    </>
  );
}
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| position | String | "top" "bottom" "left" "right" | "top" | Where to place the popover |
| overlay | String/React node | | | Content to show in the popover |


## Usage

Elements with the disabled attribute aren’t interactive, meaning users cannot
hover or click them to trigger a popover (or tooltip). As a workaround, you’ll
want to trigger the overlay from a wrapper ```<div>``` or ```<span>``` and override the
pointer-events on the disabled element.
