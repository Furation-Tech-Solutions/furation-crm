
docker buildx build \
--push \
--no-cache \
--platform linux/amd64,linux/arm64 \
-f ./infra/build/server/Dockerfile -t twentycrm/twenty-server:0.2.0-beta .