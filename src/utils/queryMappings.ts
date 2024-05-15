export {};

export const searchIndexObj = {
  type: "fulltext-index",
  name: "pdf-chat._default.pdf_search",
  uuid: "61877068c31c5042",
  sourceType: "gocbcore",
  sourceName: "pdf-chat",
  sourceUUID: "5fc7a6059192f756ecf9745635f944fb",
  planParams: {
    maxPartitionsPerPIndex: 64,
    indexPartitions: 16,
  },
  params: {
    doc_config: {
      docid_prefix_delim: "",
      docid_regexp: "",
      mode: "scope.collection.type_field",
      type_field: "type",
    },
    mapping: {
      analysis: {},
      default_analyzer: "standard",
      default_datetime_parser: "dateTimeOptional",
      default_field: "_all",
      default_mapping: {
        dynamic: true,
        enabled: false,
      },
      default_type: "_default",
      docvalues_dynamic: false,
      index_dynamic: true,
      store_dynamic: false,
      type_field: "_type",
      types: {
        "_default._default": {
          dynamic: true,
          enabled: true,
          properties: {
            embedding: {
              dynamic: false,
              enabled: true,
              fields: [
                {
                  dims: 1536,
                  index: true,
                  name: "embedding",
                  similarity: "dot_product",
                  type: "vector",
                  vector_index_optimized_for: "recall",
                },
              ],
            },
            metadata: {
              dynamic: true,
              enabled: true,
            },
            text: {
              dynamic: false,
              enabled: true,
              fields: [
                {
                  index: true,
                  name: "text",
                  store: true,
                  type: "text",
                },
              ],
            },
          },
        },
      },
    },
    store: {
      indexType: "scorch",
      segmentVersion: 16,
    },
  },
  sourceParams: {},
};
