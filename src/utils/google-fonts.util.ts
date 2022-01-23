export function googleFontsData(url = process.env.GOOGLE_FONTS_URL || '') {
  if (!url) return [];

  const [...fontFamiliesMatchAll] = url.matchAll(/family=([^&]*)/g);
  const fontFamilies = Array.from(fontFamiliesMatchAll).map(([, fontFamily]) => fontFamily);

  if (!fontFamilies.length) return [];

  return fontFamilies.map((fontFamily) => {
    let [family, variants] = fontFamily.split(':') as [string, string | Variants[]];

    family = family.replace(/[+]/g, ' ');

    if (variants && !Array.isArray(variants)) {
      let [keys, values] = variants.split('@') as any;
      const variants_: Variants[] = [];

      keys = keys.split(',');
      values = values.split(';');

      if (keys.length === 1 && keys[0] === 'wght') {
        values.forEach((weight) => {
          variants_.push({
            weight: parseInt(weight, 10),
            style: 'normal',
          });
        });
      } else if (keys.length === 2 && keys[0] === 'ital' && keys[1] === 'wght') {
        values.forEach((value) => {
          const [italic, weight] = value.split(',');

          variants_.push({
            weight: parseInt(weight, 10),
            style: italic === '1' ? 'italic' : 'normal',
          });
        });
      }

      variants = variants_;
    }

    return {
      family,
      variants: variants?.length ? variants : [{ weight: 400, style: 'normal' }],
    };
  });
}

type Variants = {
  weight: number;
  style: string;
}
