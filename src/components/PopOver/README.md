# PopOver

#### Use PopOver for giving extra context AND to make visual cues accessible

Popover is a non-modal dialog that floats around its disclosure. It's
commonly used for displaying additional rich content on top of something.

### Try them out

```.jsx
function () {
  const content = (<>
   <Box padding="xxs">
    <Button appearance="text" aria-label="Facebook">
      <Icon name="facebookSquare" color="#4267b2" size="1.5rem" />
    </Button>
    <Button appearance="text" aria-label="Twitter">
      <Icon name="twitterSquare" color="#1da1f2" size="1.5rem" />
    </Button>
    <Button appearance="text" aria-label="WhatsApp">
      <Icon name="whatsappSquare" color="#4dc247" size="1.5rem" />
    </Button>
    <Button appearance="text" aria-label="Facebook Messenger">
      <Icon name="messengerSquare" color="#288ef8" size="1.5rem" />
    </Button>
    <Button appearance="text" aria-label="LinkedIn">
      <Icon name="linkedin" color="#0077b5" size="1.5rem" />
    </Button>
    <Button appearance="text" aria-label="Email">
      <Icon name="envelopeSquare" color="#00b6ed" size="1.5rem" />
    </Button>
  </Box>
  </>);

  return (
    <>
      <PopOver overlay={content} minWidth="23em">
        <Button>
          <Icon name="share" />Share top
        </Button>
      </PopOver>
      <PopOver position="topLeft" overlay={content} minWidth="23em">
        <Button>
          <Icon name="share" />Share topLeft
        </Button>
      </PopOver>
      <PopOver position="bottom" overlay={content} minWidth="23em">
        <Button>
          <Icon name="share" />Share bottom
        </Button>
      </PopOver>
      <PopOver position="bottomLeft" overlay={content} minWidth="23em">
        <Button>
          <Icon name="share" />Share bottomLeft
        </Button>
      </PopOver>
      <PopOver position="left" overlay={content} minWidth="23em">
        <Button>
          <Icon name="share" />Share left
        </Button>
      </PopOver>
      <PopOver position="right" overlay={content} minWidth="23em">
        <Button>
          <Icon name="share" />Share right
        </Button>
      </PopOver>
    </>
  );
}
```

## Props

| Name     | Type              |                       Options                        | Default | Description                    |
| :------- | :---------------- | :--------------------------------------------------: | :------ | :----------------------------- |
| position | String            | "top" "bottom" "left" "right" "topLeft" "bottomLeft" | "top"   | Where to place the popover     |
| overlay  | String/React node |                                                      |         | Content to show in the popover |
| maxWidth | String            |                                                      | "auto"  | Max width for popover content  |
| minWidth | String            |                                                      | "auto"  | Min width for popover content  |

## Usage

Elements with the disabled attribute aren’t interactive, meaning users cannot
hover or click them to trigger a popover (or tooltip). As a workaround, you’ll
want to trigger the overlay from a wrapper `<div>` or `<span>` and override the
pointer-events on the disabled element.
