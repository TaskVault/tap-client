# TAP Client

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

### Install dependencies

```sh
pnpm install
```

---

You are ready to go.

## Local runnning

During development, you can run it like this:

```sh
pnpm run dev
```

Or you can run production build:

```sh
docker-compose up       # start-up services
docker-compose build    # build the image
docker-compose down     # stop services
```

## Testing

```sh
pnpm test
```

We use `Vitest` for testing.

Whenever possible, add tests to your code.

Simply create a file `originalFileName.test.ts`, import the functions and test them.
