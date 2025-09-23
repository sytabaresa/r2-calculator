/// <reference types="vite/client" />

declare module "*.css" {
    const mapping: Record<string, string>;
    export default mapping;
}

declare module "preact-robot"
