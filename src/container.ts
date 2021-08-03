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
export class Container implements IContainer {
  private _registry = new Map<Token, any>();

  public register<T>(token: Token, value: T): void {
    this._registry.set(token, value);
  }

  public get<T>(token: Token): T | undefined {
    return this._registry.get(token);
  }
}
