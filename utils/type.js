const parserType = (pt) => {
    switch (pt.type) {
        case 'ArrayTypeName':
            const { baseTypeName } = pt
            return `${baseTypeName.name}[]`
        case 'ElementaryTypeName':
            const { name } = pt
            return name;
        case 'UserDefinedTypeName':
            const { namePath } = pt;
            return namePath;
        case 'Mapping':
            const { keyType, valueType } = pt;
            const valueStr = parserType(valueType);
            return `${parserType(keyType)} => ${valueStr}`;
        case 'FunctionTypeName':
            throw new Error('Not Implementation parserType-FunctionTypeName')
    }
}

const parserArgu = (pa) => {
    switch (pa.type) {
        case 'ArrayTypeName':
            const { baseTypeName } = pa;
            return `${baseTypeName.name}[]`;
        case 'ElementaryTypeName':
            const { name } = pa;
            return name;
        case 'UserDefinedType':
            throw new Error('Not Implementation parserArgu-UserDefinedType')
        case 'Mapping':
            throw new Error('Not Implementation parserArgu-Mapping')
        case 'FunctionTypeName':
            throw new Error('Not Implementation parserArgu-FunctionTypeName')
    }
}
module.exports = { parserType, parserArgu }