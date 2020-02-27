# Loader

Loaders are used after some user interaction that we assume will take some time to complete. They inform the user that their request is beeing processed and that they should wait.

### Try it out

```.jsx
<React.Fragment>
  <Loader />
</React.Fragment>
```

Behaviour
Loader can be placed anywhere on the page and should be removed or hidden immediately after the targeted action has been completed.

Simple Loader
Search loader appears briefly before results are retrieved from the elasticsearch.
