class LocalStorageUtils {
  static setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static getItem<T>(key: string, defaultValue: T): T {
    const saved = localStorage.getItem(key);

    return saved ? (JSON.parse(saved) as T) : defaultValue;
  }
}

export default LocalStorageUtils;
