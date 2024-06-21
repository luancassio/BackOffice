import Swal from 'sweetalert2';

export class SweetalertCustom {

    constructor() {}

    /**
     * Função para exibir o alerta pelo tempo
     * @param titleAlert Titulo que vai ser exibido no alerta
     * @param typeAlert Qual o tipo do alerta que deseja exibir
     * @param timerAlert Quanto tempo deseja exibir caso não queira o padrão
     */
    static showAlertTimer(
        titleAlert: string,
        typeAlert: any,
        timerAlert: number = 3000,
        textAlert?: string): any{
        return Swal.fire({
            title: titleAlert,
            html: textAlert,
            icon: typeAlert,
            showConfirmButton: false,
            timer: timerAlert,
            allowOutsideClick: false,
        });
    }

    /**
     * Função para exibir o alerta com apenas confirmar
     * @param titleAlert Titulo que vai ser exibido no alerta
     * @param typeAlert Qual o tipo do alerta que deseja exibir
     * @param confirmButtonTxt Texto para ser exibido no Botão caso não queira o padrão
     * @param textAlert Texto complementar caso queira exibir
     */

    // tslint:disable-next-line:typedef
    static showAlertConfirm(
        titleAlert: string,
        typeAlert: any,
        confirmButtonTxt: string = 'Ok',
        textAlert?: string) {
        return Swal.fire({
            title: titleAlert,
            html: textAlert,
            icon: typeAlert,
            confirmButtonText: confirmButtonTxt,
            allowOutsideClick: false,
        });
    }

    /**
     * Função para Exibir o alerta com confirmar e cancelar
     * @param titleAlert Titulo que vai ser exibido no alerta
     * @param typeAlert  Qual o tipo do alerta que deseja exibir
     * @param confirmButtonTxt Texto para ser exibido no Botão caso não queira o padrão
     * @param cancelButtonTxt Texto para ser exibido no Botão caso não queira o padrão
     * @param textAlert Texto complementar caso queira exibir
     */

    // tslint:disable-next-line:typedef
    static showAlertConfirmAndCancel(
        titleAlert: string,
        typeAlert: any,
        textAlert?: string,
        confirmButtonTxt: string = 'Sim',
        cancelButtonTxt: string = 'Não') {
        return Swal.fire({
            title: titleAlert,
            html: textAlert,
            icon: typeAlert,
            showCancelButton: true,
            confirmButtonColor: '#006A46',
            cancelButtonColor: '#DE2021',
            confirmButtonText: confirmButtonTxt,
            cancelButtonText: cancelButtonTxt,
            allowOutsideClick: false,
        });
    }
}
