import { OutputEType } from "./enums";

export function getCaptializedName(type: OutputEType): string {
    return type[0].toUpperCase() + type.slice(1).toLowerCase();
}