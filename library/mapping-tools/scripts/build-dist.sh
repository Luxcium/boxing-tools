#!/usr/bin/bash

# Create the dist directory
mkdir -p dist

# Copy important files to the dist directory
cp package.json dist/package.json
cp README.md dist/README.md
cp LICENSE dist/LICENSE
cp ../../.editorconfig dist/.editorconfig
cp ../../.prettierrc.cjs dist/.prettierrc.cjs
cp ../typescript/tsconfig.json dist/tsconfig.json

# Run Prettier to format the source code and build the project
prettier -wc ./src
rm -fr lib
yarn build

# Run tests, generate code coverage reports, and generate API documentation
rm -fr dist/coverage dist/docs
yarn test
yarn build:api

# Copy the built files and images to the dist directory
rm -fr dist/lib dist/src dist/typings
cp -r lib src images dist

# Clean up the dist directory
rm -fr "$(pwd)/dist/lib/backup"
rm -fr "$(pwd)/dist/lib/typings/test"
rm -fr "$(pwd)/dist/src/backup"
rm -fr "$(pwd)/dist/lib/test"
rm -fr "$(pwd)/dist/src/test"
rm -fr "$(pwd)/dist/lib/performance"
rm -fr "$(pwd)/dist/lib/performance"
rm -fr "$(pwd)/dist/lib/ts-out-info.lib"
rm -fr "$(pwd)/dist/lib/typings/backup"

# Copy the typings directory to the dist directory
mv dist/lib/typings dist/typings
cp typings/tsdoc-metadata.json dist/typings/tsdoc-metadata.json

# Print the current working directory
pwd

# #!/usr/bin/bash

# # Create the dist directory
# mkdir -p dist

# # Copy important files to the dist directory
# yarn cp:package &
# yarn cp:readme &
# yarn cp:license &
# yarn cp:editorconf &
# yarn cp:prettierrc &
# yarn cp:tsconfig &

# # Run Prettier to format the source code and build the project
# prettier -wc ./src
# rm -fr lib
# yarn build

# # Run tests, generate code coverage reports, and generate API documentation
# rm -fr dist/coverage dist/docs
# yarn test
# yarn build:api

# # Copy the built files and images to the dist directory
# rm -fr dist/lib dist/src dist/typings
# cp -r lib src images dist

# # Clean up the dist directory
# rm -fr "$(pwd)/dist/lib/backup"
# rm -fr "$(pwd)/dist/lib/typings/test"
# rm -fr "$(pwd)/dist/src/backup"
# rm -fr "$(pwd)/dist/lib/test"
# rm -fr "$(pwd)/dist/src/test"
# rm -fr "$(pwd)/dist/lib/performance"
# rm -fr "$(pwd)/dist/lib/performance"
# rm -fr "$(pwd)/dist/lib/ts-out-info.lib"
# rm -fr "$(pwd)/dist/lib/typings/backup"

# # Copy the typings directory to the dist directory
# mv dist/lib/typings dist/typings
# cp typings/tsdoc-metadata.json dist/typings/tsdoc-metadata.json

# # Print the current working directory
# pwd
