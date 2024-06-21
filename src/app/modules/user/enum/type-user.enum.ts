export enum TypeUserEnum {
    Administrador = 0,
    Cliente = 1,
    Colaborador = 2,
    Fornecedor = 3
}

export abstract class TypeUser{
    static readonly TYPE_USER = [
        {value: TypeUserEnum.Administrador, description: 'Administrador'},
        {value: TypeUserEnum.Cliente, description: 'Cliente'},
        {value: TypeUserEnum.Colaborador, description: 'Colaborador'},
        {value: TypeUserEnum.Fornecedor, description: 'Fornecedorr'}
    ]
}

