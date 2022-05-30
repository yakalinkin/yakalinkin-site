import { reactElementEmpty } from './react-empty';

export function reactPrevElement(nodes: React.ReactNode[], idx = 0) {
  if (idx < 0)  return null;

  const node = nodes[idx - 1];

  if (reactElementEmpty(node)) {
    return reactPrevElement(nodes, idx - 1);
  }

  return node;
}
