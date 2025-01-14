This application showcases the use of react.memo

React.memo is used to create memoized components which do not re-render unless any of the props which is directly passed to it changes.

DESCRIPTION

1. In this application, App.js has two states - count1 and count2.
2. App.js also has a child component - ShowMultipliedCount which takes count1 as prop.
3. The problem was, whenever count2 changes in App.js, it would re-render and ShowMultipliedCount would re-render as well.
4. To prevent this unnecessary re-rendering, the ShowMultipliedCount component is memoized using react.memo, such that it would only re-render when count1 is changed.



