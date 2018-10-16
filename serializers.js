export const jsonSerializer = {
  fromAttribute(attr) {
    if (!attr || attr.trim() === '') {
      return undefined;
    }
    try {
      return JSON.parse(attr);
    } catch (err) {
    return undefined;
    }
  },
  toAttribute(value) {
    JSON.stringify(value);
  }
};

export const stringOrIntSerializer = {
  fromAttribute(attr) {
    if (!attr) {
      return undefined;
    }
    const trimmed = attr.trim();
    if (trimmed === '' || trimmed === 'undefined' || trimmed === 'null') {
      return undefined;
    }
    const index = parseInt(trimmed);
    if (isNaN(index)) {
        return attr;
    }
    return index;
  },
  toAttribute(value) {
    return typeof value !== 'undefined' ? `${value}` : null;
  }
};