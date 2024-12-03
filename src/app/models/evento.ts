export interface Evento {
    idEvento: number;
    nomeEvento: string;
    dataEvento: string;
    horarioInicio: string;
    horarioFim: string;
    localEvento: string;
    tipoEvento: string;
    idOrganizador: number;
    incluirTarefas: boolean;
    listaConvidados: boolean;
    fornecedores: boolean;
}
