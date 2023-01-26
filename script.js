const fs = require("fs");
const csv = require("csv-stringify");

const initial_id_notif_cert_matrimonio = 421538;
const initial_id_notif_exp_electronico = 1533729;
const initial_ch_folio = 50000;
const ch_folio = 'S99994682022082';
const initial_nss = 71957949101; 
const initial_ch_numero_resolucion = 319982;
const initial_ch_folio_servicio = 55679688;
const initial_id_notif_tipo_retiro = 1533729;

let pser_tr_notif_cert_matrimonio = [];
let pser_tr_notif_exp_electronico = [];
let pser_tr_notif_tipo_retiro = [];

// pser_tr_notif_cert_matrimonio
function create_data_pser_tr_notif_cert_matrimonio(id_notif_cert_matrimonio, i_ch_folio, nss, ch_numero_resolucion) {
    for (let i = 1; i <= 4000; i ++) {
        pser_tr_notif_cert_matrimonio.push([++id_notif_cert_matrimonio, ch_folio + (++i_ch_folio), '', 568, '01', ++nss, 
        'JIMM791127HCSMJR05', 'MARIO ALBERTO', 'JIMENEZ', 'MEJIA', 'KARLA LIZZETTE', 'MARTINEZ', 'MENDOZA',
        1, 568, '2019-02-05', '01', 7, 1, 'JIMM791127HCSMJR05', 86566951696273, 'TIVJ000104HNLRLLA0',
        'MEJIA$IBARRA$PALOMA MARGARITA', 'MEJIA$IBARRA$PALOMA MARGARITA', '2022-08-23', '2022-09-14',
        ++ch_numero_resolucion, 123, 0, 148.45, 118.19, 0, 0, 0, 1, 1, 400, '', 1, '2023-01-17', '2022-08-23',
        'NOTIFICACIONES', '', 0]);
    }
}

function create_pser_tr_notif_cert_matrimonio() {
    create_data_pser_tr_notif_cert_matrimonio(initial_id_notif_cert_matrimonio, initial_ch_folio, initial_nss, initial_ch_numero_resolucion);
    csv.stringify(pser_tr_notif_cert_matrimonio, (err, output) => {
        fs.writeFileSync("csv-files/pser_tr_notif_cert_matrimonio.csv", output);
        console.log("pser_tr_notif_cert_matrimonio - OK");
    });
}

// pser_tr_notif_exp_electronico
function create_data_pser_tr_notif_exp_electronico(id_notif_exp_electronico, i_ch_folio, nss, ch_folio_servicio) {
    for (let i = 1; i <= 4000; i ++) {
        pser_tr_notif_exp_electronico.push([++id_notif_exp_electronico, ch_folio + (++i_ch_folio), ++nss, 'JIMM791127HCSMJR05',
        'TIVJ000104HNLRLLA0', 'JIMM791127HCSMJR05', '01', '01', '02', '40', '', '01', '500', '', 1, '2022-09-15', '2022-09-15', 
        'NOTIFICACIONES', 3, ++ch_folio_servicio + '-S', 0, '', '', 1, '', '2022-09-15 18:23:30.324', '']);
    }
}

function create_pser_tr_notif_exp_electronico() {
    create_data_pser_tr_notif_exp_electronico(initial_id_notif_exp_electronico, initial_ch_folio, initial_nss, initial_ch_folio_servicio);
    csv.stringify(pser_tr_notif_exp_electronico, (err, output) => {
        fs.writeFileSync("csv-files/pser_tr_notif_exp_electronico.csv", output);
        console.log("pser_tr_notif_exp_electronico - OK");
    });
}

// pser_tr_notif_tipo_retiro
function create_data_pser_tr_notif_tipo_retiro(id_notif_tipo_retiro, i_ch_folio, nss, ch_numero_resolucion) {
    let final_ch_folio = '';
    for (let i = 1; i <= 4000; i ++) {
        final_ch_folio = ch_folio + (++i_ch_folio);
        pser_tr_notif_tipo_retiro.push([++id_notif_tipo_retiro, final_ch_folio, final_ch_folio, 568, ++nss, 'JIMM791127HCSMJR05',
        ++ch_numero_resolucion, 13005455841, '137730130054558417', 137, '', 1, '2021-06-17', '001', '', 1, '2021-05-26', 
        '2021-05-13', 'NOTIFICACIONES_PULSSAR', 1, '', '02', 2534.7, 0, 0, 5693, 28675, 3341, '2021-11-11 12:53:05.377551'
        ]);
    }
}

function create_pser_tr_notif_tipo_retiro() {
    create_data_pser_tr_notif_tipo_retiro(initial_id_notif_tipo_retiro, initial_ch_folio, initial_nss);
    csv.stringify(pser_tr_notif_tipo_retiro, (err, output) => {
        fs.writeFileSync("csv-files/pser_tr_notif_tipo_retiro.csv", output);
        console.log("pser_tr_notif_tipo_retiro - OK");
    });
}



create_pser_tr_notif_cert_matrimonio();
create_pser_tr_notif_exp_electronico();
create_pser_tr_notif_tipo_retiro();