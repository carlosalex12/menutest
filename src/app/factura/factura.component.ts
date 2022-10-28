import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { articulo } from '../model/articulo';
import { Router } from '@angular/router';
import { VariablesGlobalesService } from '../menu/serviceMenu/variables-globales.service';
import { facturas } from '../model/factura';
import { GlobalService } from '../services/GserviceGPPD';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FacturacionComponent } from '../facturacion/facturacion.component';
import { DetalleFacturaComponent } from '../detalle-factura/detalle-factura.component';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent implements OnInit {
  Factura: facturas = new facturas();
  datatable: any = [];

  dialogRef1: any;
  displayedColumns: string[] = [

    'fac_num',
    'fac_doc',
    'fac_fec',
    'cli_cod',
    'fac_est',
    'fac_ser',
    'suc_cod',
    'fac_tot',
    'fac_sub0',
    'fac_sub1',
    'fac_dscto',
    'selecionar'

  ];
  constructor(
    private readonly _rutaDatos: ActivatedRoute,
    private _router: Router,
    private GlobalService: GlobalService,
    private gvariables: VariablesGlobalesService,
    public dialog1: MatDialog
  ) {}
  openDialogcli() {
    this.dialogRef1 = this.dialog1.open(DetalleFacturaComponent);
    this.dialogRef1.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    console.log('nombre');

    this.gvariables.g_empid = {
      id: this._rutaDatos.snapshot.params,
    };
    this.gvariables.g_nemp = {
      emp: this._rutaDatos.snapshot.params,
    };
    this.ondatatable();
  }

  ondatatable() {
    this.GlobalService.metodoGet(
      `https://localhost:44381/Factura/GetAll?p_usr=` +
        this.gvariables.g_empid.id.id
    ).subscribe((res: any) => {
      this.datatable = res;

      ///datasource si iguala ala respuesta del get para imprimir los datos
      this.dataSource.data = this.datatable;
      console.log(res.Data);
    });
  }

  dataSource = new MatTableDataSource<articulo>(this.datatable.Data);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
