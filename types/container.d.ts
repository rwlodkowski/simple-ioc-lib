import type { Token } from './token';
export interface IContainer {
    /**
     * Register dependency
     *
     * @template T
     * @param {Token} token
     * @param {T} value
     * @memberof IContainer
     */
    register<T>(token: Token, value: T): void;
    /**
     * Get dependency
     *
     * @template T
     * @param {Token} token
     * @returns {(T | undefined)}
     * @memberof IContainer
     */
    get<T>(token: Token): T | undefined;
}
export declare class Container implements IContainer {
    private _registry;
    register<T>(token: Token, value: T): void;
    get<T>(token: Token): T | undefined;
}
//# sourceMappingURL=container.d.ts.map