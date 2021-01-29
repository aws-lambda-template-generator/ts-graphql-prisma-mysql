# TypeScript Lambda GraphQL with MySQL and Prisma


## Installation

```bash
yarn add apollo-server-lambda graphql

# build error not found these modules, so manually installed them.
yarn add bufferutil utf-8-validate
```

*Tools*

## Testing lambda locally

Use Serverless Offline.

```bash
# Install
yarn add --dev serverless-offline

# Start local lambda by using sls offline command
sls offline start -r ap-southeast-1 --stage test

# Test with curl
curl -X POST http://localhost:3000/test/graphql/profile --data '{"query": "{books { id author title }}"}'
```

Playground is available.

Go to `http://localhost:3000/test/graphql`. You may need to change the actual query url within the query tab to `http://localhost:3000/test/graphql/profile`

# Deploy

Rename the folder: `config_template` --> `config` and fill all the necessary information (account number and AWS regions). Make sure your AWS CLI is configured correctly. Then, use sls command to deploy.

```bash
sls deplly --stage test
```
