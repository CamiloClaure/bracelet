FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install --immutable
RUN yarn build

FROM node:16-alpine AS runner
WORKDIR /app

#ENV NODE_ENV production
ENV NEXTAUTH_URL http://localhost:3000/
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]
