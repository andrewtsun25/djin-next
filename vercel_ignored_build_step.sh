#!/bin/bash

DEPENDABOT_AUTHOR_NAME="dependabot[bot]"
echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_GIT_COMMIT_AUTHOR_LOGIN: $VERCEL_GIT_COMMIT_AUTHOR_LOGIN"

if [[ "$VERCEL_GIT_COMMIT_AUTHOR_LOGIN" == "$DEPENDABOT_AUTHOR_NAME" ]] ; then
  # Skip all builds authored by dependabot
  echo "🛑 - Build cancelled"
  exit 0;
else
  # Proceed with build otherwise
  echo "✅ - Build can proceed"
  exit 1;
fi
