.PHONY: dist pack

dist:
	yarn install
	yarn build
	cp -rf node_modules package.json yarn.lock dist/
	yarn --cwd dist install --offline --production --frozen-lockfile --ignore-optional --ignore-scripts
	rm dist/yarn.lock dist/node_modules/.yarn*

pack: dist
	rm -f package.zip
	cd dist && zip -r ../package.zip *
