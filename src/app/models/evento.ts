export interface Evento {
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
