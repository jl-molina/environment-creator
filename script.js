const fs = require("fs");
const csv = require("csv-stringify");

const initial_id_notif_cert_matrimonio = 421538;
const initial_id_notif_exp_electronico = 1533729;
const initial_id_notif_ret_desempleo = 239413;
const initial_ch_folio = 50000;
const ch_folio = 'S99994682022082';
const initial_nss = 71957949101; 
const initial_ch_numero_resolucion = 319982;
const initial_ch_folio_servicio = 55679688;
const initial_id_notif_tipo_retiro = 1533729;
const initial_keyx = 47412064;
const initialFolioSolicitud = 2121666334;
const initialSelloTrabajador = 99972045767727
const ch_numero_resolucion = 986473;

let pser_tr_notif_cert_matrimonio = [];
let pser_tr_notif_exp_electronico = [];
let pser_tr_notif_tipo_retiro = [];
let pser_tr_notif_ret_desempleo = [];
let recserviciosafore = [];
let tbcontrolps = [];
let arr_delete_pser_tr_notif_tipo_retiro = [];

let arr_update_recserviciosafore = [];
let arr_update_tbcontrolps = [];
let arr_delete_mae_plataforma_retirosdesempleoimss = [];
let arr_delete_tmp_platserv_rec_solicitud = [];
let arr_delete_tmp_platserv_ret_parcial_resol = [];
let arr_delete_tmp_platserv_ret_parcial = [];
let arr_delete_tmp_platserv_ret_sellosbiometricos_suv = [];
let arr_delete_tmp_platserv_retmotivoretiro = [];
let arr_delete_tmp_platserv_ret_parcial_tx = [];
let arr_delete_cta_his_marca = [];
let arr_delete_cta_act_marca = [];
let arr_delete_cta_excep_marca = [];
let arr_update_pser_tr_notif_tipo_retiro = [];
let arr_update_mae_plataforma_retirosdesempleoimss = [];
let arr_delete_rec_solicitud = [];
let arr_delete_ret_beneficiario = [];
let arr_delete_ret_parcial_resol = [];
let arr_delete_ret_sellosbiometricos_suv = [];
let arr_delete_ret_parcial = [];
let arr_delete_ret_parcial_tx = [];
let arr_delete_ret_bus_diag12 = [];
let arr_delete_retmotivoretiro = [];


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
        '2021-05-13', 'NOTIFICACIONES_PULSSAR', 0, '', '02', 2534.7, 0, 0, 5693, 28675, 3341, '2021-11-11 12:53:05.377551'
        ]);
    }
}

function create_pser_tr_notif_tipo_retiro() {
    create_data_pser_tr_notif_tipo_retiro(initial_id_notif_tipo_retiro, initial_ch_folio, initial_nss,initial_ch_numero_resolucion);
    csv.stringify(pser_tr_notif_tipo_retiro, (err, output) => {
        fs.writeFileSync("csv-files/pser_tr_notif_tipo_retiro.csv", output);
        console.log("pser_tr_notif_tipo_retiro - OK");
    });
}

// pser_tr_notif_ret_desempleo
function create_data_pser_tr_notif_ret_desempleo(id_notif_ret_desempleo, i_ch_folio, nss, ch_numero_resolucion,selloTrabajador) {
    let final_ch_folio = '';
    for (let i = 1; i <= 4000; i ++) {
        final_ch_folio = ch_folio + (++i_ch_folio);
        pser_tr_notif_ret_desempleo.push([++id_notif_ret_desempleo, final_ch_folio, final_ch_folio, 568, ++nss, 'JIMM791127HCSMJR05','MARIO ALBERTO', 'JIMENEZ', 'MEJIA',"I", "07",++ch_numero_resolucion, "578", 'JIMM791127HCSMJR05', "01", (++selloTrabajador).toString(),"","","01","","400","ACEPTADO",1,"2023-01-26","2023-01-26","NOTIFICACIONES PULSSAR",0,"","2022-09-18"]);
    }
}

function create_pser_tr_notif_ret_desempleo() {
    create_data_pser_tr_notif_ret_desempleo(initial_id_notif_ret_desempleo, initial_ch_folio, initial_nss,ch_numero_resolucion,initialSelloTrabajador)
    csv.stringify(pser_tr_notif_ret_desempleo, (err, output) => {
        fs.writeFileSync("csv-files/pser_tr_notif_ret_desempleo.csv", output);
        console.log("pser_tr_notif_ret_desempleo - OK");
    });
}

// recserviciosafore
function create_data_recserviciosafore(keyx, nss, folioServicio,folioSolicitud) {
    for (let i = 1; i <= 4000; i ++) {
        recserviciosafore.push([++keyx, "2023-01-26", ++folioServicio, 'S', 'JIMM791127HCSMJR05', ++nss, ++folioSolicitud,0,2,1003,1025,
        0,1,"2023-01-26","2023-01-26","2023-01-31","2023-01-26",2108045259,9,"1900-01-01",98478711,0,1,"000",0,"3A",0,0,0,0,"00:00:00","10.20.215.179",1,0,0,"","00","","1900-01-01 00:00:00.000","1900-01-01 00:00:00.000","",0,"2023-01-26","15:35:00",0,"",0,0]);
    }
}

function create_recserviciosafore() {
    create_data_recserviciosafore(initial_keyx, initial_nss,initial_ch_folio_servicio,initialFolioSolicitud);
    csv.stringify(recserviciosafore, (err, output) => {
        fs.writeFileSync("csv-files/recserviciosafore.csv", output);
        console.log("recserviciosafore - OK");
    });
}
    
// tbcontrolps
function create_data_tbcontrolps(keyx, nss, folioServicio,i_ch_folio) {
    for (let i = 1; i <= 4000; i ++) {
        tbcontrolps.push([++keyx, "2023-01-26", ++folioServicio + "-S", ch_folio + (++i_ch_folio),"","1025", ++nss, "JIMM791127HCSMJR05",0,0,98478711,"10.20.215.179",229,"0022920220823155700028","16:14:00","00:00:00","","","","",0,0,0,0,0,0]);
    }
}

function create_tbcontrolps() {
    create_data_tbcontrolps(initial_keyx, initial_nss,initial_ch_folio_servicio,initial_ch_folio);
    csv.stringify(tbcontrolps, (err, output) => {
        fs.writeFileSync("csv-files/tbcontrolps.csv", output);
        console.log("tbcontrolps - OK");
    });
}

function delete_pser_tr_notif_tipo_retiro(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_pser_tr_notif_tipo_retiro.push([`delete from pser_tr_notif_tipo_retiro where nss = '${++nss
        }';`]);
    }
    csv.stringify(arr_delete_pser_tr_notif_tipo_retiro, (err, output) => {
        fs.writeFileSync("csv-files/delete_pser_tr_notif_tipo_retiro.csv", output);
        console.log("delete_pser_tr_notif_tipo_retiro - OK");
    });
}

function update_recserviciosafore (nss){
    for (let i = 1; i <= 4000; i ++) {
        arr_update_recserviciosafore.push([`update recserviciosafore set codigotermino = 9 where nss = '${++nss
        }';`]);
    }
    csv.stringify(arr_update_recserviciosafore, (err, output) => {
        fs.writeFileSync("csv-files/update_recserviciosafore.csv", output);
        console.log("update_recserviciosafore - OK");
    });
}

function update_tbcontrolps (nss){
    for (let i = 1; i <= 4000; i ++) {
        arr_update_tbcontrolps.push([`update tbcontrolps set replicasafreplatserv = 0,tiposerviciointerno = '1025',fechaalta = current_date-1 where nss = '${++nss
        }';`]);
    }
    csv.stringify(arr_update_tbcontrolps, (err, output) => {
        fs.writeFileSync("csv-files/update_tbcontrolps.csv", output);
        console.log("update_tbcontrolps - OK");
    });
}

function delete_mae_plataforma_retirosdesempleoimss(folioServicio) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_mae_plataforma_retirosdesempleoimss.push([`delete from mae_plataforma_retirosdesempleoimss where fol_servicio = '${++folioServicio}';`]);
    }
    csv.stringify(arr_delete_mae_plataforma_retirosdesempleoimss, (err, output) => {
        fs.writeFileSync("csv-files/delete_mae_plataforma_retirosdesempleoimss.csv", output);
        console.log("delete_mae_plataforma_retirosdesempleoimss - OK");
    });
}

function delete_tmp_platserv_rec_solicitud(folioServicio) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_tmp_platserv_rec_solicitud.push([`delete from tmp_platserv_rec_solicitud where folio_rec = '${++folioServicio}';`]);
    }
    csv.stringify(arr_delete_tmp_platserv_rec_solicitud, (err, output) => {
        fs.writeFileSync("csv-files/delete_tmp_platserv_rec_solicitud.csv", output);
        console.log("delete_tmp_platserv_rec_solicitud - OK");
    });
}

function delete_tmp_platserv_ret_parcial_resol(i_ch_folio) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_tmp_platserv_ret_parcial_resol.push([`delete from tmp_platserv_ret_parcial_resol where folio_t_procesar = '${ch_folio + (++i_ch_folio)}';`]);
    }
    csv.stringify(arr_delete_tmp_platserv_ret_parcial_resol, (err, output) => {
        fs.writeFileSync("csv-files/delete_tmp_platserv_ret_parcial_resol.csv", output);
        console.log("delete_tmp_platserv_ret_parcial_resol - OK");
    });
}

function delete_tmp_platserv_ret_parcial(i_ch_folio) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_tmp_platserv_ret_parcial.push([`delete from tmp_platserv_ret_parcial where folio_t_procesar = '${ch_folio + (++i_ch_folio)}';`]);
    }
    csv.stringify(arr_delete_tmp_platserv_ret_parcial, (err, output) => {
        fs.writeFileSync("csv-files/delete_tmp_platserv_ret_parcial.csv", output);
        console.log("delete_tmp_platserv_ret_parcial - OK");
    });
}

function delete_tmp_platserv_ret_sellosbiometricos_suv(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_tmp_platserv_ret_sellosbiometricos_suv.push([`delete from tmp_platserv_ret_sellosbiometricos_suv where nss = '${nss}';`]);
    }
    csv.stringify(arr_delete_tmp_platserv_ret_sellosbiometricos_suv, (err, output) => {
        fs.writeFileSync("csv-files/delete_tmp_platserv_ret_sellosbiometricos_suv.csv", output);
        console.log("delete_tmp_platserv_ret_sellosbiometricos_suv - OK");
    });
}

function delete_tmp_platserv_retmotivoretiro(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_tmp_platserv_retmotivoretiro.push([`delete from tmp_platserv_retmotivoretiro where nss = '${nss}';`]);
    }
    csv.stringify(arr_delete_tmp_platserv_retmotivoretiro, (err, output) => {
        fs.writeFileSync("csv-files/delete_tmp_platserv_retmotivoretiro.csv", output);
        console.log("delete_tmp_platserv_retmotivoretiro - OK");
    });
}

function delete_tmp_platserv_ret_parcial_tx(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_tmp_platserv_ret_parcial_tx.push([`delete from tmp_platserv_ret_parcial_tx where nss = '${nss}';`]);
    }
    csv.stringify(arr_delete_tmp_platserv_ret_parcial_tx, (err, output) => {
        fs.writeFileSync("csv-files/delete_tmp_platserv_ret_parcial_tx.csv", output);
        console.log("delete_tmp_platserv_ret_parcial_tx - OK");
    });
}

function delete_cta_his_marca(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_cta_his_marca.push([`delete from cta_his_marca where nss = '${nss}';`]);
    }
    csv.stringify(arr_delete_cta_his_marca, (err, output) => {
        fs.writeFileSync("csv-files/delete_cta_his_marca.csv", output);
        console.log("delete_cta_his_marca - OK");
    });
}

function delete_cta_act_marca(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_cta_act_marca.push([`delete from cta_act_marca where nss = '${nss}';`]);
    }
    csv.stringify(arr_delete_cta_act_marca, (err, output) => {
        fs.writeFileSync("csv-files/delete_cta_act_marca.csv", output);
        console.log("delete_cta_act_marca - OK");
    });
}

function delete_cta_excep_marca(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_cta_excep_marca.push([`delete from cta_excep_marca where nss = '${nss}';`]);
    }
    csv.stringify(arr_delete_cta_excep_marca, (err, output) => {
        fs.writeFileSync("csv-files/delete_cta_excep_marca.csv", output);
        console.log("delete_cta_excep_marca - OK");
    });
}

function update_pser_tr_notif_tipo_retiro (nss){
    for (let i = 1; i <= 4000; i ++) {
        arr_update_pser_tr_notif_tipo_retiro.push([`update pser_tr_notif_tipo_retiro set nu_replicado = 0 where nss = '${++nss}';`]);
    }
    csv.stringify(arr_update_pser_tr_notif_tipo_retiro, (err, output) => {
        fs.writeFileSync("csv-files/update_pser_tr_notif_tipo_retiro.csv", output);
        console.log("update_pser_tr_notif_tipo_retiro - OK");
    });
}

function update_mae_plataforma_retirosdesempleoimss (nss){
    for (let i = 1; i <= 4000; i ++) {
        arr_update_mae_plataforma_retirosdesempleoimss.push([`update mae_plataforma_retirosdesempleoimss set num_estadoregistro = 1 where num_nss = '${++nss}';`]);
    }
    csv.stringify(arr_update_mae_plataforma_retirosdesempleoimss, (err, output) => {
        fs.writeFileSync("csv-files/update_mae_plataforma_retirosdesempleoimss.csv", output);
        console.log("update_mae_plataforma_retirosdesempleoimss - OK");
    });
}

function delete_ret_beneficiario(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_ret_beneficiario.push([`delete from ret_beneficiario where nss = '${nss}';`]);
    }
    csv.stringify(arr_delete_ret_beneficiario, (err, output) => {
        fs.writeFileSync("csv-files/delete_ret_beneficiario.csv", output);
        console.log("delete_ret_beneficiario - OK");
    });
}

function delete_rec_solicitud(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_rec_solicitud.push([`delete from rec_solicitud where n_seguro = '${nss}';`]);
    }
    csv.stringify(arr_delete_rec_solicitud, (err, output) => {
        fs.writeFileSync("csv-files/delete_rec_solicitud.csv", output);
        console.log("delete_rec_solicitud - OK");
    });
}

function delete_ret_parcial_resol(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_ret_parcial_resol.push([`delete from ret_parcial_resol where nss = '${nss}';`]);
    }
    csv.stringify(arr_delete_ret_parcial_resol, (err, output) => {
        fs.writeFileSync("csv-files/delete_ret_parcial_resol.csv", output);
        console.log("delete_ret_parcial_resol - OK");
    });
}

function delete_ret_sellosbiometricos_suv(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_ret_sellosbiometricos_suv.push([`delete from ret_sellosbiometricos_suv where nss = '${nss}';`]);
    }
    csv.stringify(arr_delete_ret_sellosbiometricos_suv, (err, output) => {
        fs.writeFileSync("csv-files/delete_ret_sellosbiometricos_suv.csv", output);
        console.log("delete_ret_sellosbiometricos_suv - OK");
    });
}

function delete_ret_parcial(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_ret_parcial.push([`delete from ret_parcial where nss = '${nss}';`]);
    }
    csv.stringify(arr_delete_ret_parcial, (err, output) => {
        fs.writeFileSync("csv-files/delete_ret_parcial.csv", output);
        console.log("delete_ret_parcial - OK");
    });
}

function delete_ret_parcial_tx(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_ret_parcial_tx.push([`delete from ret_parcial_tx where nss = '${nss}';`]);
    }
    csv.stringify(arr_delete_ret_parcial_tx, (err, output) => {
        fs.writeFileSync("csv-files/delete_ret_parcial_tx.csv", output);
        console.log("delete_ret_parcial_tx - OK");
    });
}

function delete_ret_bus_diag12(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_ret_bus_diag12.push([`delete from ret_bus_diag12 where nss = '${nss}';`]);
    }
    csv.stringify(arr_delete_ret_bus_diag12, (err, output) => {
        fs.writeFileSync("csv-files/delete_ret_bus_diag12.csv", output);
        console.log("delete_ret_bus_diag12 - OK");
    });
}

function delete_retmotivoretiro(nss) {
    for (let i = 1; i <= 4000; i ++) {
        arr_delete_retmotivoretiro.push([`delete from retmotivoretiro where nss = '${nss}';`]);
    }
    csv.stringify(arr_delete_retmotivoretiro, (err, output) => {
        fs.writeFileSync("csv-files/delete_retmotivoretiro.csv", output);
        console.log("delete_retmotivoretiro - OK");
    });
}


//Ambiente general del python para que se pueda correr por primera vez
create_pser_tr_notif_cert_matrimonio();
create_pser_tr_notif_exp_electronico();
create_pser_tr_notif_tipo_retiro();
create_pser_tr_notif_ret_desempleo();
create_recserviciosafore();
create_tbcontrolps();
delete_pser_tr_notif_tipo_retiro(initial_nss);

//Ambiente para poder volver a correr el python
    //Aforeglobal
    update_recserviciosafore(initial_nss);
    update_tbcontrolps(initial_nss);
    //Informix
    delete_mae_plataforma_retirosdesempleoimss(initial_ch_folio_servicio);
    delete_tmp_platserv_rec_solicitud(initial_ch_folio_servicio);
    delete_tmp_platserv_ret_parcial_resol(initial_ch_folio);
    delete_tmp_platserv_ret_parcial(initial_ch_folio);
    delete_tmp_platserv_ret_sellosbiometricos_suv(initial_nss);
    delete_tmp_platserv_retmotivoretiro(initial_nss);
    delete_tmp_platserv_ret_parcial_tx(initial_nss);
    delete_cta_his_marca(initial_nss);
    delete_cta_act_marca(initial_nss);
    delete_cta_excep_marca(initial_nss);
    //Notificaciones
    update_pser_tr_notif_tipo_retiro(initial_nss);

//Ambientar para op13
    update_mae_plataforma_retirosdesempleoimss(initial_nss);
    delete_ret_beneficiario(initial_nss);
    delete_rec_solicitud(initial_nss);
    delete_ret_parcial_resol(initial_nss);
    delete_ret_sellosbiometricos_suv(initial_nss);
    delete_ret_parcial(initial_nss);
    delete_ret_parcial_tx(initial_nss);
    delete_ret_bus_diag12(initial_nss);
    delete_retmotivoretiro(initial_nss);
