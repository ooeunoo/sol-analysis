const fs = require('fs');
const parser = require('@solidity-parser/parser');
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
    const modifiers = []
    const variables = [['variable', 'type', 'visibility']]
    const functions = [['function', 'visibility', 'stateMutability', 'modifiers', 'returns']]

    parser.visit(ast, {
        ImportDirective: function (_import) {
            // console.log(_import)
        },
        ContractDefinition: function (_contract) {
            parser.visit(_contract, {
                StateVariableDeclaration: function (_stateVariable) {
                    parser.visit(_stateVariable, {
                        VariableDeclaration: function (_variable) {
                            console.log(_variable)
                            const { typeName, name } = _variable;

                            const isMapping = typeName.type == 'Mapping';
                            switch (typeName.type) {
                                case 'Mapping':
                                    const { keyType, valueType } = typeName;


                                case 'ElementaryTypeName':
                                    break;
                                case 'UserDefinedType':
                                    break;
                                case 'ArrayTypeName':
                                    break;
                            }




                        }
                    })
                },
                ModifierDefinition: function (_modifier) {

                },
                FunctionDefinition: function (_function) {
                    const { name, visibility, stateMutability, modifiers, returnParameters, parameters } = _function;

                    let inParams = '';
                    if (parameters) {
                        inParams = parameters.map(({ typeName }) => {
                            const { type } = typeName;
                            if (type == 'ArrayTypeName') {
                                return `${typeName.baseTypeName.name}[]`
                            }

                            return typeName.name
                        }).join(', ');
                    }
                    const nameWithParams = `${name}(${inParams})`;

                    // returns
                    let outParams = '';
                    if (returnParameters) {
                        outParams = returnParameters.map(({ typeName }) => {
                            const { type } = typeName;
                            if (type == 'ArrayTypeName') {
                                return `${typeName.baseTypeName.name}[]`
                            }

                            return typeName.name
                        }).join(', ');
                    }

                    // modifiers
                    const m = modifiers.map(({ name, arguments }) => {
                        let r = name;
                        if (arguments != null && arguments.length > 1) {
                            ags = arguments.map(({ typeName }) => {
                                const { type } = typeName;
                                if (type == 'ArrayTypeName') {
                                    return `${typeName.baseTypeName.name}[]`
                                }

                                return typeName.name
                            }).join(', ');

                            return `${r}(${ags})`;
                        }

                        return r;
                    }).join(', ')

                    functions.push([
                        nameWithParams,
                        visibility,
                        stateMutability == null ? "" : stateMutability,
                        m,
                        outParams,
                    ])

                }
            })
        }
    })
    // console.log(table(functions))
    // console.log(table(functions))

} catch (e) {
    console.error('Error parsing Solidity file:', e);
}
