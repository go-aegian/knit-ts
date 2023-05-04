// @generated by protoc-gen-es v1.2.0
// @generated from file spec/enum.proto (package spec, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spec.TopLevel
 */
export const TopLevel = proto3.makeEnum(
  "spec.TopLevel",
  [
    {no: 0, name: "FIRST"},
    {no: 1, name: "SECOND"},
  ],
);

/**
 * @generated from message spec.EnumShell
 */
export const EnumShell = proto3.makeMessageType(
  "spec.EnumShell",
  () => [
    { no: 1, name: "optional_enum", kind: "enum", T: proto3.getEnumType(EnumShell_InsideMessage), opt: true },
  ],
);

/**
 * @generated from enum spec.EnumShell.InsideMessage
 */
export const EnumShell_InsideMessage = proto3.makeEnum(
  "spec.EnumShell.InsideMessage",
  [
    {no: 0, name: "THIRD"},
    {no: 1, name: "FOURTH"},
  ],
);

