# Usage

## Install dependencies

```bash
yarn add inversify reflect-metadata
```

※ The `reflect-metadata` polyfill should be imported only once in your entire application because the Reflect object is mean to be a global singleton

※ It is recommended to use Symbols but InversifyJS also support the usage of Classes and string literals

In this case the `Ninja.ts` uses [constructor injection](https://github.com/inversify/InversifyJS/blob/master/wiki/constructor_injection.md) over [property injection](https://github.com/inversify/InversifyJS/blob/master/wiki/property_injection.md) because it doesn't need both dependencies of `Weapon.ts` and can function without either of the two.

reference: https://stackoverflow.com/a/1503604/4477547
