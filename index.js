const fs = require('fs');
const parser = require('@solidity-parser/parser');
const { parserArgu, parserType } = require('./utils/type');
const { exportOutput } = require('./utils/exports');
const { table } = require('table');

// Check if the correct arguments are provided
if (process.argv.length !== 3) {
    console.error('Usage: node index.js <solidity_file_path>');
    process.exit(1);
}

const filePath = process.argv[2];

try {
    const input = fs.readFileSync(filePath, 'utf8');
    const ast = parser.parse(input);

    const imports = []
    const contracts = []
    const events = [['event']];
    const modifiers = [['modifier']]
    const variables = [['variable', 'type', 'visibility']]
    const functions = [['function', 'visibility', 'stateMutability', 'modifiers', 'returns']]

    parser.visit(ast, {
        pragmaDirective: function (_pragma) { },
        ImportDirective: function (_import) { },
        ContractDefinition: function (_contract) {
            parser.visit(_contract, {
                StateVariableDeclaration: function (_stateVariable) {
                    parser.visit(_stateVariable, {
                        VariableDeclaration: function (_variable) {
                            const { name, typeName, visibility } = _variable;
                            variables.push([name, parserType(typeName), visibility])

                        }
                    })
                },
                ModifierDefinition: function (_modifier) {
                    const { name, parameters } = _modifier;
                    if (parameters != null && parameters.length >= 1) {
                        const args = parameters.map(({ typeName }) => parserType(typeName)).join(', ');
                        modifiers.push([`${name}(${args})`])
                    } else {
                        modifiers.push([name])
                    }

                },
                EventDefinition: function (_event) {
                    const { name, parameters } = _event;
                    if (parameters != null && parameters.length >= 1) {
                        const args = parameters.map(({ typeName }) => parserType(typeName)).join(', ');
                        events.push([`${name}(${args})`])
                    } else {
                        events.push([name])
                    }
                },
                FunctionDefinition: function (_function) {
                    const { name, visibility, stateMutability, modifiers, returnParameters, parameters } = _function;

                    const input = parameters != null ? parameters.map(({ typeName }) => parserArgu(typeName)).join(', ') : '';
                    const output =
                        returnParameters != null ?
                            returnParameters.map(({ typeName }) => parserType(typeName)).join(', ') : '';

                    const modifier = modifiers.map(({ name, arguments }) => {
                        if (arguments != null && arguments.length >= 1) {
                            ags = arguments.map(({ typeName }) => parserType(typeName)).join(', ');
                            return `${name}(${ags})`;
                        }
                        return name;
                    }).join(', ')

                    functions.push([
                        `${name}(${input})`,
                        visibility,
                        stateMutability == null ? "" : stateMutability,
                        modifier,
                        output,
                    ])

                }
            })
        }
    })
    // console.log(table(imports));
    // console.log(table(contracts));
    console.log(table(events));
    console.log(table(modifiers));
    console.log(table(variables));
    console.log(table(functions));
    // exportOutput(imports)
} catch (e) {
    console.error('Error parsing Solidity file:', e);
}
