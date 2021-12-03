import { on } from '@utils/utils';

export const focusDisplayHandler = () => {
  const attr = 'data-focus-method';
  const touch = 'touch';
  const mouse = 'mouse';
  const key = 'key';

  let focusMethod: boolean | string = false;
  let lastFocusMethod: boolean | string;

  function handleKeyDown() {
    focusMethod = key;
  }

  function handleMouseDown() {
    if (focusMethod === touch) return;
    focusMethod = mouse;
  }

  function handleTouchStart() {
    focusMethod = touch;
  }

  function handleFocus(event: FocusEvent) {
    const target = event.target as HTMLElement;

    if (!focusMethod) {
      focusMethod = lastFocusMethod;
    }
    if (typeof target?.setAttribute === 'function') {
      target.setAttribute(attr, String(focusMethod));
      lastFocusMethod = focusMethod;
      focusMethod = false;
    }
  }

  function handleBlur(event: FocusEvent) {
    const target = event.target as HTMLElement;

    if (typeof target?.removeAttribute === 'function') {
      target.removeAttribute(attr);
    }
  }

  function handleWindowBlur() {
    focusMethod = false;
  }

  on(document, 'keydown', handleKeyDown, true);
  on(document, 'mousedown', handleMouseDown, true);
  on(document, 'touchstart', handleTouchStart, true);
  on(document, 'focus', handleFocus, true);
  on(document, 'blur', handleBlur, true);
  on(window, 'blur', handleWindowBlur);
};
