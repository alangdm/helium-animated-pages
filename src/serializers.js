export const stringOrIntSerializer = {
  /**
   *
   * @param {string} attr
   */
  fromAttribute(attr) {
    if (!attr) {
      return undefined;
    }
    const trimmed = attr.trim();
    if (trimmed === '' || trimmed === 'undefined' || trimmed === 'null') {
      return undefined;
    }
    const index = parseInt(trimmed, 10);
    if (Number.isNaN(index)) {
      return attr;
    }
    return index;
  },
  /**
   *
   * @param {string|number} value
   */
  toAttribute(value) {
    return typeof value !== 'undefined' ? `${value}` : null;
  },
};
