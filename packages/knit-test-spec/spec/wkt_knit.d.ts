// @generated by protoc-gen-knit-ts v0.0.4
// @generated from file spec/wkt.proto (package spec, syntax proto3)
/* eslint-disable */
// @ts-nocheck

export declare type WktService = {
    "spec.WktService": {
        fetch: {};
        do: {
            getDoubleValue: {
                $: "@wkt/DoubleValue";
                value: "@wkt/DoubleValue";
            };
            getBoolValue: {
                $: "@wkt/BoolValue";
                value: "@wkt/BoolValue";
            };
            getFloatValue: {
                $: "@wkt/FloatValue";
                value: "@wkt/FloatValue";
            };
            getInt64Value: {
                $: "@wkt/Int64Value";
                value: "@wkt/Int64Value";
            };
            getUint64Value: {
                $: "@wkt/UInt64Value";
                value: "@wkt/UInt64Value";
            };
            getInt32Value: {
                $: "@wkt/Int32Value";
                value: "@wkt/Int32Value";
            };
            getUint32Value: {
                $: "@wkt/UInt32Value";
                value: "@wkt/UInt32Value";
            };
            getStringValue: {
                $: "@wkt/StringValue";
                value: "@wkt/StringValue";
            };
            getBytesValue: {
                $: "@wkt/BytesValue";
                value: "@wkt/BytesValue";
            };
            getAny: {
                $: "@wkt/Any";
                value: "@wkt/Any";
            };
            getDuration: {
                $: "@wkt/Duration";
                value: "@wkt/Duration";
            };
            getEmpty: {
                $: "@wkt/Empty";
                value: "@wkt/Empty";
            };
            getFieldMask: {
                $: "@wkt/FieldMask";
                value: "@wkt/FieldMask";
            };
            getTimestamp: {
                $: "@wkt/Timestamp";
                value: "@wkt/Timestamp";
            };
            getStruct: {
                $: "@wkt/Struct";
                value: "@wkt/Struct";
            };
            getListValue: {
                $: "@wkt/ListValue";
                value: "@wkt/ListValue";
            };
            getValue: {
                $: "@wkt/Value";
                value: "@wkt/Value";
            };
        };
        listen: {};
    };
};
export interface Wkt {
    fields?: WktFields;
    oneofs?: WktOneof;
    maps?: WktMap;
    repeated?: WktRepeated;
}
export interface WktFields {
    doubleValue?: "@wkt/DoubleValue";
    boolValue?: "@wkt/BoolValue";
    floatValue?: "@wkt/FloatValue";
    int64Value?: "@wkt/Int64Value";
    uint64Value?: "@wkt/UInt64Value";
    int32Value?: "@wkt/Int32Value";
    uint32Value?: "@wkt/UInt32Value";
    stringValue?: "@wkt/StringValue";
    bytesValue?: "@wkt/BytesValue";
    any?: "@wkt/Any";
    duration?: "@wkt/Duration";
    empty?: "@wkt/Empty";
    fieldMask?: "@wkt/FieldMask";
    timestamp?: "@wkt/Timestamp";
    struct?: "@wkt/Struct";
    listValue?: "@wkt/ListValue";
    value?: "@wkt/Value";
    nullValue: "@wkt/NullValue";
}
export interface WktOneof {
    oneofValue?: {
        "@oneof": {
            doubleValue: "@wkt/DoubleValue";
            boolValue: "@wkt/BoolValue";
            floatValue: "@wkt/FloatValue";
            int64Value: "@wkt/Int64Value";
            uint64Value: "@wkt/UInt64Value";
            int32Value: "@wkt/Int32Value";
            uint32Value: "@wkt/UInt32Value";
            stringValue: "@wkt/StringValue";
            bytesValue: "@wkt/BytesValue";
            any: "@wkt/Any";
            duration: "@wkt/Duration";
            empty: "@wkt/Empty";
            fieldMask: "@wkt/FieldMask";
            timestamp: "@wkt/Timestamp";
            struct: "@wkt/Struct";
            listValue: "@wkt/ListValue";
            value: "@wkt/Value";
            nullValue: "@wkt/NullValue";
        };
    };
}
export interface WktMap {
    doubleValue: {
        "@map": {
            [k: string]: "@wkt/DoubleValue";
        };
    };
    boolValue: {
        "@map": {
            [k: string]: "@wkt/BoolValue";
        };
    };
    floatValue: {
        "@map": {
            [k: string]: "@wkt/FloatValue";
        };
    };
    int64Value: {
        "@map": {
            [k: string]: "@wkt/Int64Value";
        };
    };
    uint64Value: {
        "@map": {
            [k: string]: "@wkt/UInt64Value";
        };
    };
    int32Value: {
        "@map": {
            [k: string]: "@wkt/Int32Value";
        };
    };
    uint32Value: {
        "@map": {
            [k: string]: "@wkt/UInt32Value";
        };
    };
    stringValue: {
        "@map": {
            [k: string]: "@wkt/StringValue";
        };
    };
    bytesValue: {
        "@map": {
            [k: string]: "@wkt/BytesValue";
        };
    };
    any: {
        "@map": {
            [k: string]: "@wkt/Any";
        };
    };
    duration: {
        "@map": {
            [k: string]: "@wkt/Duration";
        };
    };
    empty: {
        "@map": {
            [k: string]: "@wkt/Empty";
        };
    };
    fieldMask: {
        "@map": {
            [k: string]: "@wkt/FieldMask";
        };
    };
    timestamp: {
        "@map": {
            [k: string]: "@wkt/Timestamp";
        };
    };
    struct: {
        "@map": {
            [k: string]: "@wkt/Struct";
        };
    };
    listValue: {
        "@map": {
            [k: string]: "@wkt/ListValue";
        };
    };
    value: {
        "@map": {
            [k: string]: "@wkt/Value";
        };
    };
    nullValue: {
        "@map": {
            [k: string]: "@wkt/NullValue";
        };
    };
}
export interface WktRepeated {
    doubleValue: Array<"@wkt/DoubleValue">;
    boolValue: Array<"@wkt/BoolValue">;
    floatValue: Array<"@wkt/FloatValue">;
    int64Value: Array<"@wkt/Int64Value">;
    uint64Value: Array<"@wkt/UInt64Value">;
    int32Value: Array<"@wkt/Int32Value">;
    uint32Value: Array<"@wkt/UInt32Value">;
    stringValue: Array<"@wkt/StringValue">;
    bytesValue: Array<"@wkt/BytesValue">;
    any: Array<"@wkt/Any">;
    duration: Array<"@wkt/Duration">;
    empty: Array<"@wkt/Empty">;
    fieldMask: Array<"@wkt/FieldMask">;
    timestamp: Array<"@wkt/Timestamp">;
    struct: Array<"@wkt/Struct">;
    listValue: Array<"@wkt/ListValue">;
    value: Array<"@wkt/Value">;
    nullValue: Array<"@wkt/NullValue">;
}
