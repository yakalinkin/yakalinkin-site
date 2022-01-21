export function replace(source: string | (string | React.ReactElement)[], find: string, replace: React.ReactElement) {
  if (!Array.isArray(source)) source = [source];

  for (let i = 0; i < source.length; i++) {
    const part = source[i];

    if (typeof part === 'string') {
      source[i] = part.split(find).map((part, i) => i ? [replace, part] : part) as any;
    }
  }

  return flatten(source).filter(Boolean);
}

function flatten<T>(arr: Array<T>): T[] {
  return arr.reduce(
    (prev, curr) => (
      Array.isArray(curr)
        ? prev.concat(flatten(curr))
        : prev.concat(curr)
    ),
    [] as Array<T>,
  );
}
