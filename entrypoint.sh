#!/bin/bash

if [ -z "$NEXT_PUBLIC_NODE_ENV" ]; then
    echo "NEXT_PUBLIC_NODE_ENV environment variable must be set."
    exit 1
fi

echo "NEXT_PUBLIC_NODE_ENV: $NEXT_PUBLIC_NODE_ENV"

set -x

rm -rf node_modules build out .npm .next .cache .vercel .pnp .pnp.js package-lock.json coverage report.*.json *.log

npm install

if [ "$NEXT_PUBLIC_NODE_ENV" = "production" ]; then
    echo "Starting in production mode..."

    npm run build
    npm run start -p 3000
else
    echo "Starting in development mode..."

    npm run dev
fi

echo "Script is running..."

sleep infinity
