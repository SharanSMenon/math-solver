import { OutputEType } from "./enums";

export function getCapitalizedName(type: OutputEType): string {
    return type[0].toUpperCase() + type.slice(1);
}