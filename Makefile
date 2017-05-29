.PHONY: up test test-unit test-integration

build:
	docker-compose build
test:
	docker-compose run --rm app yarn run test
test-unit:
	docker-compose run --rm app yarn run test:unit
test-coverage:
	docker-compose run --rm app yarn run test:coverage
test-integration:
	docker-compose run --rm app yarn run test:integration
test-single:
# TODO-KSH Implements this feature
	echo "To be implemented"
lint-duplicate:
	docker-compose run --rm app yarn run lint:duplicate
lint-check:
	docker-compose run --rm app yarn run lint:check
lint-fix:
	docker-compose run --rm app yarn run lint:fix
deploy:
# TODO-KSH Implements this feature
	echo "To be implemented"
install:
	rm yarn.lock
	yarn install
	yarn run typings install

