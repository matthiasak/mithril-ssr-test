### Mithril Isomorphic/Universal experiment

> ... demonstrating why React is still valid.

Per this blog post (https://medium.com/@l1ambda/mithril-vs-angular-vs-react-d0d659c24bae), @l1ambda demonstrates the power of a small and tiny API. Mithril caught my attention atleast a year ago, and since then I've implemented isomorphic websites (like http://dstllry.co) into the equation, and some yet-to-be-released projects (like an interactive documentary to be submitted to Sundance 2016).

There is one problem with teh current Mithril/Mithril-node-render pipeline for isomorphic apps and why I will still choose React on large or important projects: Mithril doesn't currently seem to be aware of pre-existing DOM structure when the Mithril Virtual DOM implementation mounts. 

Thus, as in the provided example and screencpture, you will see an isomorphic/universal app render a simple unordered list of chores to the page. All content is available in the very first load of the page. However, once Mithril mounts the page (as it does here after a 1 second delay), Mithril re-renders the element, clearing out the mounted element.

For large-scale applications, this could result in a LOT of redrawing on the page... especially pages with lots of network requests flying this way and that.

Mithril's rendering is **beautifully simple** and **effing fast**, but sometimes we have to make sacrifices. :-(

If anyone has working pull-requests/implementations where Mithril does *not* re-render existing elements on the page, please share! :-) I really want to see that happen.