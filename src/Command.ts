import CommandUsage from "./CommandUsage"

export default interface Command {
    name: string,
    description: string,
    usage: CommandUsage[],
    alias: string[],
    run: () => void
}