import Singleton from "./Singleton";
import Command from "./Command";

export default class CommandManager extends Singleton {
    private _commandMap: Map<string, Command>;
    private _aliasMap: Map<string, string>;

    /**
     * Create CommandManager
     * @author SuiBian9516
     */
    constructor() {
        super();
        this._commandMap = new Map<string, Command>();
        this._aliasMap = new Map<string, string>();
    }

    /**
     * Register command
     * @author SuiBian9516
     * @param name - The command name, it must be the same as `name` in `options`
     * @param options - The command detail
     */
    public register(name: string, options: Command): void {
        if (name !== options.name) throw new Error('Command names is not the same');
        this._commandMap.set(name, options);
        for (let i = 0; i < options.alias.length; i++) {
            this._aliasMap.set(`${options.alias[i]}`, name);
        }
        return;
    }

    /**
     * Trigger a command
     * @author SuiBian9516
     * @param name - The command you want to trigger
     * @returns 
     */
    public trigger(name: string): boolean {
        if (this._commandMap.has(name)) {
            this._commandMap.get(name)?.run();
            return true;
        } else {
            if (this._aliasMap.has(name)) {
                this._commandMap.get(this._aliasMap.get(name) as string)?.run();
                return true;
            } else {
                return false;
            }
        }
    }

    /**
     * Get instance
     * @author SuiBian9516
     * @returns 
     */
    static getInstance(): CommandManager {
        return this.instance<CommandManager>();
    }
}