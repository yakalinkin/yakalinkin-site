export const noop = () => {};

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, EventListenerOrEventListenerObject, boolean | AddEventListenerOptions | undefined]
) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, EventListenerOrEventListenerObject, boolean | AddEventListenerOptions | undefined]
) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
  }
}

export const isBrowser = typeof window !== 'undefined';

export const isLinkExternal = (url: string) => /^https?:\/\//.test(url);

export const isLinkEmpty = (url: string) => !url || url === '#';

export const isEmpty = (value) => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string') {
    return value.trim() === '';
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
};

export function getHtmlDataset(key: string) {
  if (!key) throw new Error('The "key" value cannot be falsy in HTMLHtmlElement.dataset');

  const html = document.querySelector('html') as HTMLHtmlElement;

  return html.dataset[key] || '';
}

export function setHtmlDataset(key: string, value: string) {
  if (!key) throw new Error('The "key" value cannot be falsy in HTMLHtmlElement.dataset');

  const html = document.querySelector('html') as HTMLHtmlElement;

  html.dataset[key] = value;
}
