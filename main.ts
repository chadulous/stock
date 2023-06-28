import { grantOrThrow } from 'permissions';
await grantOrThrow({
  name: 'read'
}, {
  name: 'write'
})
import { Command } from 'cliffy>command';
import { cyan } from 'https://deno.land/std@0.192.0/fmt/colors.ts';
import { resolve } from "https://deno.land/std@0.192.0/path/mod.ts";

const decoder = new TextDecoder('utf-8')
const cli = new Command()
  .name('stock')
  .version(cyan('0.0.0'))
  .description('The official CLI for the stock language.')
  .command('run <file:string>')
  .action(async (_opts, file, ..._args) => {
    const filegot = decoder.decode(await Deno.readFile(resolve(file)))
    console.log(filegot)
  })
;
if(import.meta.main) {
  await cli.parse(Deno.args);
}
