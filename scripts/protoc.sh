#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
cd "${BASEDIR}"/../

#
#PROTO_DIR="./src/proto"
#PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
#GRPC_TOOLS_NODE_PROTOC_PLUGIN="./node_modules/.bin/grpc_tools_node_protoc_plugin"
#GRPC_TOOLS_NODE_PROTOC="./node_modules/.bin/grpc_tools_node_protoc"
#
## Find all .proto files recursively inside src/proto/
#find "${PROTO_DIR}" -name "*.proto" | while read -r PROTO_FILE; do
#  # Get the directory of the proto file
#  PROTO_DIRNAME=$(dirname "${PROTO_FILE}")
#
#  echo "Generating code for ${PROTO_FILE}"
#
#  # JavaScript and gRPC service generation
#  ${GRPC_TOOLS_NODE_PROTOC} \
#      --js_out=import_style=commonjs,binary:"${PROTO_DIR}" \
#      --grpc_out="grpc_js:${PROTO_DIR}" \
#      --plugin=protoc-gen-grpc="${GRPC_TOOLS_NODE_PROTOC_PLUGIN}" \
#      -I "${PROTO_DIR}" \
#      "${PROTO_FILE}"
#
#  # TypeScript definition generation
#  ${GRPC_TOOLS_NODE_PROTOC} \
#      --plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}" \
#      --ts_out="${PROTO_DIR}" \
#      -I "${PROTO_DIR}" \
#      "${PROTO_FILE}"
#
#done



PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
GRPC_TOOLS_NODE_PROTOC_PLUGIN="./node_modules/.bin/grpc_tools_node_protoc_plugin"
GRPC_TOOLS_NODE_PROTOC="./node_modules/.bin/grpc_tools_node_protoc"

PROTO_DIR="./src/proto"

# Find all .proto files recursively inside src/proto/
find "${PROTO_DIR}" -name "*.proto" | while read -r PROTO_FILE; do
  # Get the directory of the proto file
  PROTO_DIRNAME=$(dirname "${PROTO_FILE}")

  echo "Generating code for ${PROTO_FILE}"
  echo "Directory ${PROTO_DIRNAME}"

  ${GRPC_TOOLS_NODE_PROTOC} \
    --plugin=protoc-gen-grpc="${GRPC_TOOLS_NODE_PROTOC_PLUGIN}" \
    --plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}" \
    --js_out=import_style=commonjs,binary:"${PROTO_DIRNAME}" \
    --grpc_out=grpc_js:"${PROTO_DIRNAME}" \
    --ts_out=client_grpc1:"${PROTO_DIRNAME}" \
    -I "${PROTO_DIRNAME}" \
    "${PROTO_DIRNAME}"/*.proto

done