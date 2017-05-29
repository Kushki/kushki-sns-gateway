.PHONY: up test test-unit test-integration

build:
	docker-compose build
test:
	sudo ifconfig lo0 alias 10.200.10.9
	./shell/sls_notifier_start.sh
	docker-compose run --rm app yarn run test
test-unit:
	docker-compose run --rm app yarn run test:unit
test-coverage:
	docker-compose run --rm app yarn run test:coverage
test-functional:
	sudo ifconfig lo0 alias 10.200.10.9
	./shell/sls_notifier_start.sh
	docker-compose run --rm app yarn run test:functional
test-integration:
	sudo ifconfig lo0 alias 10.200.10.9
	./shell/sls_notifier_start.sh
	docker-compose run --rm app yarn run test:integration
test-single:
# TODO-KSH Implements this feature
	sudo ifconfig lo0 alias 10.200.10.9
	./shell/sls_notifier_start.sh
	echo "To be implemented"
lint-duplicate:
	docker-compose run --rm app yarn run lint:duplicate
lint-check:
	docker-compose run --rm app yarn run lint:check
lint-fix:
	docker-compose run --rm app yarn run lint:fix
deploy:
	sudo ifconfig lo0 alias 10.200.10.9
	./shell/sls_notifier_start.sh
	docker-compose run --rm app yarn run deploy
watch:
	sudo ifconfig lo0 alias 10.200.10.9
	./shell/sls_notifier_start.sh
	docker-compose run --rm --service-ports app yarn run watch
install:
	rm yarn.lock
	yarn install
	mkdir -p typings
	mkdir -p typings/custom
	./shell/sls_schema_typings.sh
	yarn run typings install

