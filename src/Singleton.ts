export default class Singleton {
    private static _instance: any = null;

    /**
     * Get instance
     * @author SuiBian9516
     * @returns
     */
    public static instance<T>(): T {
        if (this._instance === null) {
            this._instance = new this() as T;
        }
        return this._instance;
    }

    constructor() { }
}