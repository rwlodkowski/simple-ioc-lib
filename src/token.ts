export type Token = symbol;

/**
 * Create unique token / identifier
 *
 * @export
 * @param {string} [name]
 * @returns {Token}
 */
export function createToken(name?: string): Token {
  return Symbol(name);
}
