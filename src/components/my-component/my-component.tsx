import { h, Component } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  render() {
    return <img srcSet="assets/200/tree-1.jpg 200w, assets/400/tree-1.jpg 400w, assets/800/tree-1.jpg 800w, assets/1200/tree-1.jpg 1200w, " />;
  }
}
