Ton Ads
---

## Installation
### NVM
Install nvm.
```sh 
nvm use
```

### PNPM
Install corepack.
```sh
corepack enable
corepack prepare pnpm@latest --activate
```

### Installation
```sh
pnpm install
```
---

You are ready to go.


## Testing
```sh 
pnpm test
```

We use `Vitest` for testing.

Whenever possible, add tests to your code.

Simply create a file `originalFileName.test.ts`, import the functions and test them.
