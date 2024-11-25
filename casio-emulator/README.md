# TODO :
- Define language syntax ✅
- Define instructions ✅
- Write runner ❌
- Make easy to add new instructions (packages) ❌
## Syntax
### Instruction syntax
`<instruction_name> [arg1], [arg2]`
### Structures syntax
```
<structure_name> [arg1] {
<instructions>
}
```
## Intructions
`avancer <number>`<br>
`tourner <number>`<br>
`orienter <number>`<br>
`goto <number>, <number>`<br>
`pen <down|up>`<br>
`var <a|b|c|d|e|f|m>, <number>`<br>
`demander <a|b|c|d|e|f|m>`<br>
`message <1|2|3|4>`<br>
`afficher <number>`<br>
`style <croix|fleche>`<br>
`pause`<br>
`repeter <number>|<condition>`<br>
```
if <condition> {
<code>
}
else <condition> {
<code>
}
```
## Comments
Comments start with `;`