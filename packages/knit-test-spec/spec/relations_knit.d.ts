// @generated by protoc-gen-knit-ts v0.0.3
// @generated from file spec/relations.proto (package spec, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { All } from "./all_knit.js";
export declare type AllResolverService = {
    "spec.AllResolverService": {
        fetch: {};
        do: {
            getAllRelSelf: {
                $: GetAllRelSelfRequest;
                value: GetAllRelSelfResponse;
            };
            getAllRelSelfParam: {
                $: GetAllRelSelfParamRequest;
                value: GetAllRelSelfParamResponse;
            };
        };
        listen: {};
    };
};
export interface GetAllRelSelfRequest {
    bases: Array<All>;
}
export interface GetAllRelSelfResponse {
    values: Array<GetAllRelSelfResponse_AllResult>;
}
export interface GetAllRelSelfResponse_AllResult {
    relSelf?: All;
}
export interface GetAllRelSelfParamRequest {
    bases: Array<All>;
    id: string;
}
export interface GetAllRelSelfParamResponse {
    values: Array<GetAllRelSelfParamResponse_AllParamResult>;
}
export interface GetAllRelSelfParamResponse_AllParamResult {
    relSelfParam?: All;
}
declare module "./all_knit.js" {
    interface All {
        relSelf?: {
            $: undefined;
            value: GetAllRelSelfResponse_AllResult["relSelf"];
        };
    }
}
declare module "./all_knit.js" {
    interface All {
        relSelfParam?: {
            $: Omit<GetAllRelSelfParamRequest, "bases">;
            value: GetAllRelSelfParamResponse_AllParamResult["relSelfParam"];
        };
    }
}
