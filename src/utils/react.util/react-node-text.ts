import { reactElementEmpty } from './react-empty';
import { reactNodeType, ReactNodeType } from './react-node-type';

class ReactNodeText {

  node: React.ReactNode;

  constructor(node: React.ReactNode) {
    this.node = node;
  }

  get firstWord() {
    return this.getWordByPosition(this.node, 'first');
  }

  get lastWord() {
    return this.getWordByPosition(this.node, 'last');
  }

  private getWordByPosition(node: React.ReactNode, position: 'first' | 'last') {
    const type = reactNodeType(node);

    switch (type) {
      case ReactNodeType.BOOLEAN:
      case ReactNodeType.NUMBER:
        return String(node);

      case ReactNodeType.STRING:
        return this.getWord(node as string, position);

      case ReactNodeType.ARRAY: {
        const element = this.getElement(node as React.ReactNode[], position);
        return this.getWordByPosition(element, position);
      }

      case ReactNodeType.CHILDREN: {
        const element = (node as React.ReactPortal).props.children;
        return this.getWordByPosition(element, position);
      }

      default:
        return '';
    }
  }

  private getWord(str: string, position: 'first' | 'last') {
    return this.getElement(str.split(' '), position);
  }

  private getElement<T>(nodes: T[], position: 'first' | 'last'): T {
    const _nodes = nodes.filter((node) => !reactElementEmpty(node));

    return position === 'first' ? nodes[0] : _nodes[_nodes.length - 1];
  }

}

export const reactNodeText = (node: React.ReactNode) => new ReactNodeText(node);
