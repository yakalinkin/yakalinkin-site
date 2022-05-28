import { reactElementEmpty } from './react-empty';

export function reactNextElement(nodes: React.ReactNode[], idx = 0) {
  if (idx >= nodes.length)  return null;

  const node = nodes[idx + 1];

  if (reactElementEmpty(node)) {
    return reactNextElement(nodes, idx + 1);
  }

  return node;
}
