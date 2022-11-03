FROM node:18.12.0-alpine3.16 AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM node:18.12.0-alpine3.16 as builder

COPY / /app
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules

RUN yarn install
RUN yarn build

FROM node:18.12.0-alpine3.16 as runner

ENV NODE_ENV production
ENV PORT 3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app /app
WORKDIR /app

EXPOSE $PORT

CMD ["yarn", "run", "start"]