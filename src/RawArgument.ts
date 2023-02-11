export default class RawArgument {
    private data: string;
    /**
     * Create raw argument
     * @author SuiBian9516
     * @param data - The raw data
     */
    constructor(data: string) {
        this.data = data;
    }
    /**
     * Get the raw data
     * @author SuiBian9516
     * @returns - Raw data
     */
    public getData(): string {
        return this.data;
    }
}