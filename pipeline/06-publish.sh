#!/usr/bin/env bash
yarn run tsc
npm adduser <<!
$NPM_USER
$NPM_PASS
$NPM_EMAIL
!
npm publish --access public