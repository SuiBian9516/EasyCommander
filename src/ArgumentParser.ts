import RawArgument from "./RawArgument";

export default class ArgumentParser {
    private args: RawArgument[] = [];
    /**
     * Create ArgumentParser
     * @param arg - The arguments you want to parse
     */
    constructor(arg: string[]) {
        for (let i = 0; i < arg.length; i++) {
            this.args.push(new RawArgument(`${arg[i]}`));
        }
    }

    /**
     * Delete arguments
     * @param start - Start index
     * @param count - Count of arguments you want to delete
     */
    public deleteArgs(start: number, count: number): void {
        this.args.splice(start, count);
    }

    /**
     * Get raw argument list
     * @author SuiBian9516
     * @returns - Raw Argument List
     */
    public print(): RawArgument[] {
        return this.args;
    }
}