import FontFaceObserver from 'fontfaceobserver';

const DEFAULT_TIMEOUT = 3000;

const FONT_WEIGHT_NAMES = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
};

const FONT_STYLE_NAMES = {
  normal: '',
  italic: 'Italic',
};

async function loadFont({ family, variant }, timeout = DEFAULT_TIMEOUT) {
  const weight = variant.weight || '';
  const style = variant.style || '';
  const fullName = `${family} ${FONT_WEIGHT_NAMES[weight]}${FONT_STYLE_NAMES[style]}`;

  try {
    const font = new FontFaceObserver(family, variant);
    await font.load();
  } catch (error) {
    console.warn(`The '${fullName}' font didn't appear after ${timeout / 1000} seconds.`);
    throw null;
  }
}

async function loadFontGroup(group?, timeout?) {
  const { family, variants } = group;
  const loadFonts = variants.map((variant) => loadFont({ family, variant }, timeout));

  try {
    await Promise.all(loadFonts);
  } catch (error) {
    // no catch
  }
}

export { loadFont, loadFontGroup };
