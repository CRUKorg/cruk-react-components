# Carousel

Lightweight carousel component that works with mouse and touch events. Accepts React node array as children so will work with any HTML element as a child.

## How carousels work

- The carousel automatically detects which item is in view using intersection observers
- Navigation can be controlled via previous/next buttons or dot indicators
- Supports both mouse and touch interactions for scrolling
- Works with external state management for position control
- Provides smooth scrolling animations with debounced position updates

## Accessibility

- Uses `aria-live="assertive"` to announce position changes to screen readers
- Navigation buttons include proper ARIA labels and screen reader text
- Dot indicators use `role="switch"` with `aria-checked` for current position
- Keyboard navigation is supported through the scrollable container
- Screen reader users get descriptive text for all interactive elements

### Try it out

```.jsx
function () {
  const [currentPosition, setCurrentPosition] = React.useState(0);

  const carouselItems = [
    <div style={{ padding: '20px', background: '#f0f0f0', textAlign: 'center' }}>
      <h3>Slide 1</h3>
      <p>First carousel item</p>
    </div>,
    <div style={{ padding: '20px', background: '#e0e0e0', textAlign: 'center' }}>
      <h3>Slide 2</h3>
      <p>Second carousel item</p>
    </div>,
    <div style={{ padding: '20px', background: '#d0d0d0', textAlign: 'center' }}>
      <h3>Slide 3</h3>
      <p>Third carousel item</p>
    </div>
  ];

  return (
    <Carousel
      startPosition={currentPosition}
      onPositionChanged={setCurrentPosition}
      shrinkUnselectedPages={true}
    >
      {carouselItems}
    </Carousel>
  );
}
```

### Full width carousel

```.jsx
<Carousel fullWidthChild={true}>
  <img src="/image1.jpg" alt="Image 1" />
  <img src="/image2.jpg" alt="Image 2" />
  <img src="/image3.jpg" alt="Image 3" />
</Carousel>
```

### Simple carousel without external state

```.jsx
<Carousel>
  <Box padding="lg" backgroundColor="lightGrey">Content 1</Box>
  <Box padding="lg" backgroundColor="lightBlue">Content 2</Box>
  <Box padding="lg" backgroundColor="lightGreen">Content 3</Box>
</Carousel>
```

## Props

| Name                  | Type      | Default   | Description                                                                                                                   |
| :-------------------- | :-------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------- |
| startPosition         | number    | undefined | Index in which the carousel is scrolled to on mount. Use with external state management                                       |
| onPositionChanged     | function  | undefined | Callback for when position changes. First parameter is the current position. Debounced to avoid conflicts with external state |
| shrinkUnselectedPages | boolean   | false     | Show items left and right of current item smaller than the current item for a preview effect                                  |
| fullWidthChild        | boolean   | false     | Set carousel items to full width of parent container. Useful for image carousels                                              |
| children              | ReactNode | undefined | Children items of the carousel. Can be any React elements                                                                     |
