install:
	npm install

link:
	sudo npm link

babel:
	npx babel src --out-dir dist

gendiff:
	npx babel-node src/bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test -- --watch

test-coverage:
	npm test -- --coverage
