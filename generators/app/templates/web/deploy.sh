#!/usr/bin/env sh
set -e
export IMAGE_TAG=$(echo -en $CI_COMMIT_SHA | tr -c '[:alnum:]_.-' '-')
export APP_IMAGE_NAME="$CI_REGISTRY_IMAGE/app:$IMAGE_TAG"
export ENVIRONMENT="$CI_ENVIRONMENT_SLUG"
export NODE_ENV="development"
if [ "$ENVIRONMENT" == "production" ]; then
	export NODE_ENV="production";
	export DOMAIN="$DOMAIN,$PRODUCTION_DOMAIN"
fi

# build base images
docker-compose build
# build apps images
docker-compose -f docker-compose.yml -f docker-compose.stack.yml build
docker push "$APP_IMAGE_NAME"

# deploy stack
docker-compose -f docker-compose.yml -f docker-compose.stack.yml config > stack.yml
docker stack deploy -c stack.yml --prune "$CI_PROJECT_PATH_SLUG-$ENVIRONMENT"
