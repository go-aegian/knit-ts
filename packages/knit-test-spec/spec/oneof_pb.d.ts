// @generated by protoc-gen-es v1.5.0
// @generated from file spec/oneof.proto (package spec, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spec.OneofEnum
 */
export declare enum OneofEnum {
  /**
   * @generated from enum value: ONEOF_ENUM_ZERO = 0;
   */
  ZERO = 0,

  /**
   * @generated from enum value: ONEOF_ENUM_TWO = 1;
   */
  TWO = 1,
}

/**
 * @generated from message spec.Oneof
 */
export declare class Oneof extends Message<Oneof> {
  /**
   * @generated from oneof spec.Oneof.oneof_value
   */
  oneofValue: {
    /**
     * @generated from field: string scalar = 1;
     */
    value: string;
    case: "scalar";
  } | {
    /**
     * @generated from field: spec.OneofMessage message = 2;
     */
    value: OneofMessage;
    case: "message";
  } | {
    /**
     * @generated from field: spec.OneofEnum enum = 3;
     */
    value: OneofEnum;
    case: "enum";
  } | {
    /**
     * @generated from field: spec.NestedMessage nestedMessage = 4;
     */
    value: NestedMessage;
    case: "nestedMessage";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Oneof>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spec.Oneof";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Oneof;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Oneof;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Oneof;

  static equals(a: Oneof | PlainMessage<Oneof> | undefined, b: Oneof | PlainMessage<Oneof> | undefined): boolean;
}

/**
 * @generated from message spec.OneofMessage
 */
export declare class OneofMessage extends Message<OneofMessage> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<OneofMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spec.OneofMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OneofMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OneofMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OneofMessage;

  static equals(a: OneofMessage | PlainMessage<OneofMessage> | undefined, b: OneofMessage | PlainMessage<OneofMessage> | undefined): boolean;
}

/**
 * @generated from message spec.NestedMessage
 */
export declare class NestedMessage extends Message<NestedMessage> {
  /**
   * @generated from field: spec.OneofMessage nested = 1;
   */
  nested?: OneofMessage;

  constructor(data?: PartialMessage<NestedMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spec.NestedMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NestedMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NestedMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NestedMessage;

  static equals(a: NestedMessage | PlainMessage<NestedMessage> | undefined, b: NestedMessage | PlainMessage<NestedMessage> | undefined): boolean;
}

