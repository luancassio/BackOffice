import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export class UtilModal {

	/**
	 * * Abre o modal no tamanho
	 * @param modalService Serviço do modal.
	 * @param component O componente a ser aberto.
	 * @param size O tamanho do modal (lg, xl, sm) / Valor defaul md.
	 */
	static openModal(modalService: NgbModal, component: any, size: string = 'md') {
		const modalRef = modalService.open(component,
			{centered: true, backdrop: 'static', size, keyboard: false, windowClass: 'modal-custom-' + size,  scrollable: true }
		);
		return modalRef;
	}
}
