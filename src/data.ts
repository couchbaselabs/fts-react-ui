export const simpleSearchIndex = () => {
    const index = `[
        {
            "uuid": "37c6cdbb67ae924b",
            "name": "travel-sample-search",
            "sourceName": "travel-sample",
            "type": "fulltext-index",
            "params": {
                "doc_config": {
                    "docid_prefix_delim": "",
                    "docid_regexp": "",
                    "mode": "scope.collection.type_field",
                    "type_field": "type"
                },
                "mapping": {
                    "analysis": {},
                    "default_analyzer": "standard",
                    "default_datetime_parser": "dateTimeOptional",
                    "default_field": "_all",
                    "default_mapping": {
                        "dynamic": true,
                        "enabled": false
                    },
                    "default_type": "_default",
                    "docvalues_dynamic": false,
                    "index_dynamic": true,
                    "store_dynamic": true,
                    "type_field": "_type",
                    "types": {
                        "inventory.landmark": {
                            "dynamic": false,
                            "enabled": true
                        },
                        "inventory.route": {
                            "dynamic": true,
                            "enabled": true
                        }
                    }
                },
                "store": {
                    "indexType": "scorch",
                    "segmentVersion": 15
                }
            },
            "sourceUuid": "4e100964b033dd197922c6fd716b1540",
            "sourceParams": {},
            "sourceType": "gocbcore",
            "planParams": {
                "indexPartitions": 1,
                "maxPartitionsPerPIndex": 1024
            }
        }
    ]`;
    return JSON.parse(index);
}