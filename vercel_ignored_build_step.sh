#!/bin/bash

DEPENDABOT_AUTHOR_NAME="dependabot[bot]"
echo "VERCEL_ENV: ${VERCEL_ENV}"
echo "VERCEL_GIT_COMMIT_AUTHOR_LOGIN: ${VERCEL_GIT_COMMIT_AUTHOR_LOGIN}"

if [[ $VERCEL_GIT_COMMIT_AUTHOR_LOGIN == "${DEPENDABOT_AUTHOR_NAME}" && $VERCEL_ENV == "preview" ]] ; then
  # Skip all builds authored by dependabot for preview environments
  echo "🛑 - Preview build authored by dependabot, cancelling build..."
  exit 0;
else
  # Proceed with build otherwise
  echo "✅ - Not a preview build authored by dependabot, initiating build..."
  exit 1;
fi
