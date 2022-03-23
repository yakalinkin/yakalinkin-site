import endsWith from 'lodash/endsWith';
import { join } from 'path';

function fromTsAlias(tsAlias: string) {
  return endsWith(tsAlias, '/*')
    ? tsAlias.substring(0, tsAlias.length - 2)
    : `${tsAlias}$`;
}

function fromTsPath(tsPath: string) {
  return endsWith(tsPath, '/*')
    ? tsPath.substring(0, tsPath.length - 2)
    : tsPath;
}

export function tsconfigPathsToAlias(
  rootPath: string,
  paths: Record<string, ReadonlyArray<string>>,
) {
  return Object.entries(paths).reduce<Record<string, string>>(
    (alias, [key, value]) => {
      if (value.length !== 1) {
        throw new TypeError(
          `Unsupported TS alias ${key} has length ${value.length}`,
        );
      }
      alias[fromTsAlias(key)] = join(rootPath, fromTsPath(value[0]));
      return alias;
    },
    {},
  );
}
