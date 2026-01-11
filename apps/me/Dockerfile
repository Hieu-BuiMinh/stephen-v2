# docker buildx build --progress=plain -f apps/me/Dockerfile --load -t me-app .
# docker run --rm -p 3001:3001 me-app
# -p <PORT_MÁY_BẠN>:<PORT_TRONG_CONTAINER>

ARG NODE_VERSION=22.11.0

FROM node:${NODE_VERSION}-slim AS base
WORKDIR /app

# pnpm via corepack
RUN corepack enable
RUN corepack prepare pnpm@9.15.0 --activate

############################
# Prepare (prune)
############################
FROM base AS prepare
COPY . .
RUN pnpm -w dlx turbo prune me --docker

############################
# Builder
############################
FROM base AS builder

COPY --from=prepare /app/out/json/ ./
COPY --from=prepare /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --frozen-lockfile

COPY --from=prepare /app/out/full/ ./

ENV NODE_ENV=production
RUN pnpm -w dlx turbo run build --filter=me...

############################
# Runner (slim để tránh mismatch)
############################
FROM node:${NODE_VERSION}-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN groupadd --gid 1001 nodejs \
 && useradd --uid 1001 --gid 1001 --create-home nextjs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/me/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/me/.next/static ./apps/me/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/me/public ./apps/me/public

ENV PORT=3001
EXPOSE 3001

CMD ["node", "apps/me/server.js"]
