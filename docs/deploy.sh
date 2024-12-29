#!/bin/bash

rm -rf docs
harp compile
mv www docs
rm docs/deploy.sh
git co docs/CNAME
echo 'done'
