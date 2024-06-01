FROM --platform=linux/amd64 node:20.11.0-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
RUN cd ..
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN mkdir -p /prod/client
RUN pnpm deploy --filter=client --prod /prod/client

FROM base AS client
COPY --from=build /prod/client /prod/client
WORKDIR /prod/client
CMD [ "pnpm", "start" ]
