# A very minimal Cloudflare Worker Hono App

- minimal to start with
- minimal types
- respect the doc (Hono and Cloudflare)
- simple to learn

# To start with a very minimal Cloudflare Worker app

1. Clone the repo
2. Install packages (`npm install`)
3. Create `.dev.vars` to put vars and secrets in development
4. Run `npx wrangler secret put VAR_NAME` to bind var in production
5. Run `npm deploy`
6. From v4, just make a new commit.

# Versions

- v1: minimal starter app with some vars (api_key, enviroment, d1)
- v2: app with a simple route and JSX template (server-side rendering)
- v3: app with 2 templates
- v4: app with public folder and auto deployment
- v5: app with Tailwind CSS and build on deployment

# To set automatic deployment to Cloudflare

Create these credentials in Cloudflare
- CLOUDFLARE_ACCOUNT_ID
- CLOUDFLARE_API_TOKEN

Add these to GitHub repo > Settings > Secrets and variables > Actions > Repository secrets

Commit and see automatic deployment.

# To bind vars and secrets to Worker

In local development:
- vars can be put in `.dev.vars` or `wrangler.toml` under [vars]
- secrets should be put in `.dev.vars` only

In production:
- run `npx wrangler secret put VAR_NAME` to bind vars and secrets to production Worker
- OR, you can go to Cloudflare / Worker Name / Settings / Variables and Secrets to manually set there