# Pagination

Pagination is used when we are viewing large amounts of data.
Data is split into multiple pages and pagination is used to
easily navigate through these pages.

### Try it out

```.jsx
function () {
  const [page, setPage] = React.useState(1);

  return (
    <>
      <Box>
        <Heading h2>Page {page}</Heading>
        <Pagination current={page} perPage={10} items={100} pagerCallback={(n) => setPage(n)} />
        <Pagination current={page} perPage={10} items={100} hideLast pagerCallback={(n) => setPage(n)} />
      </Box>
      <Pagination current={5} perPage={10} items={59} pagerCallback={(n) => alert(n)} />
      <Pagination current={6} perPage={10} items={101} pagerCallback={(n) => alert(n)} />
      <Pagination current={1} perPage={10} items={100} pagerCallback={(n) => alert(n)} />
      <Pagination hideLast current={6} perPage={7} items={70} pagerCallback={(n) => alert(n)} />
    </>
  );
}
```

## Props

| Name          | Type     | Options | Default | Description                                                            |
| :------------ | :------- | :-----: | :------ | :--------------------------------------------------------------------- |
| current       | Number   |         | 1       | Styles PageItem as active, and renders a `<span>` instead of an `<a>`. |
| perPage       | Number   |         | null    |                                                                        |
| items         | Number   |         | null    |                                                                        |
| pagerCallback | Function |         | null    |                                                                        |

### Behaviour

When a user clicks ‘next’ or ‘previous’ the view is immediately scrolled to the top element of the listing. When a user is on the first page of the listing the ‘previous’ button is not visible.

### Simple Pagination

Search pagination is can be found at the bottom of the search results page.
The previous button will not be visible on the first page of the results and has a .disabled class (second example below).
