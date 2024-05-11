Minimal cross-environment fingerprinting TypeScript library.

# Install

```bash
npm add @the-minimal/fingerprint
```

# Highlights

- Small (~ 325 bytes)
- Low runtime overhead
- Unique output
    - If `global` then append keys of `global`
    - If `window` then append keys of `window`
    - If `performance` then append `performance.toJSON` or `performance.timeOrigin`
    - If `Intl` then append timezone
    - If `process` then append `pid`, `ppid`, `arch`, `platform` and values of `env`
    - If `navigator` then append `userAgent`, `languages` and `platform`
    - If `screen` then append `width` and `height`
- Singleton
    - Consequent calls return the same fingerprint

# Example

```ts
const fingerPrint = createFingerPrint();
```
