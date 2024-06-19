#!/usr/bin/env bash

aws s3 sync --acl private build s3://bulls.yosola.co --delete --cache-control max-age=0,no-cache,no-store,must-revalidate
aws s3 cp s3://bulls.yosola.co/index.html s3://bulls.yosola.co/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl private
