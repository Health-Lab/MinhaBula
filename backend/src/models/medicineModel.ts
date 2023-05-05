

export interface MedicineModel {
	nome: string;
	principioAtivo: string;
	composicao: string;
	dosagem: number;
	precaucoes: string;
	overdose: string;
	reacoes: string;
	contraIndicacao: string;
	funcionamento: string;
	laboratorio: {
		empresa: string;
		endereço: string;
		cnpj: string;
		sac: string;
	}
};