#!/bin/sh

set -ex
npx prisma migrate deploy
yarn start
