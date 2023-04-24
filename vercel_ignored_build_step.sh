#!/bin/bash

DEPENDABOT_AUTHOR_NAME="dependabot[bot]"
echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_GIT_COMMIT_AUTHOR_LOGIN: $VERCEL_GIT_COMMIT_AUTHOR_LOGIN"

if [[ "$VERCEL_GIT_COMMIT_AUTHOR_LOGIN" == "$DEPENDABOT_AUTHOR_NAME" ]] ; then
  # Skip all builds authored by dependabot
  echo "🛑 - Build authored by dependabot, cancelling build..."
  exit 0;
else
  # Proceed with build otherwise
  echo "✅ - Build not authored by dependabot, initiating build..."
  exit 1;
fi
