// @generated by protoc-gen-knit-ts v0.0.1
// @generated from file spec/sub/sub.proto (package spec.sub, syntax proto3)
/* eslint-disable */
// @ts-nocheck

export declare type SubService = {
    "spec.sub.SubService": {
        fetch: {};
        do: {
            subMethod: {
                $: SubMessage;
                value: SubMessage;
            };
        };
        listen: {};
    };
};
export interface SubMessage {
}
