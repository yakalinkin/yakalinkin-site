export function setTabIndexInNodes(nodes: NodeListOf<ChildNode>, tabIndex = 0) {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;
      element.tabIndex = tabIndex;
    }
    if (node.hasChildNodes()) {
      setTabIndexInNodes(node.childNodes, tabIndex);
    }
  }
}
