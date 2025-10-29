import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Factura } from './entities/factura.entity';
import { Response } from 'express';
import * as PDFDocument from 'pdfkit';

@Injectable()
export class FacturaPdfService {
    async generarPDFStream(factura: Factura, res: Response) {
        try {
            const doc = new PDFDocument({ bufferPages: true });

            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `inline; filename=factura-${factura.numero}.pdf`);

            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=factura-${factura.numero}.pdf`);

            doc.pipe(res);

            doc.fontSize(24)
                .fillColor('#2c3e50')
                .text('FACTURA', { align: 'center' })
                .fillColor('#000000');

            doc.moveDown(1.5);

            doc.moveTo(50, doc.y)
                .lineTo(550, doc.y)
                .strokeColor('#3498db')
                .lineWidth(2)
                .stroke();

            doc.moveDown(1);

            doc.fontSize(12);

            doc.font('Helvetica-Bold').text('Número: ', { continued: true })
                .font('Helvetica').text(factura.numero);

            doc.font('Helvetica-Bold').text('Fecha de emisión: ', { continued: true })
                .font('Helvetica').text(factura.fecha_emision.toLocaleDateString());

            doc.moveDown(0.5);

            doc.fillColor('#2980b9')
                .font('Helvetica-Bold')
                .text('DATOS DEL CLIENTE Y PROYECTO', { underline: true });

            doc.fillColor('#000000').moveDown(0.3);

            doc.font('Helvetica-Bold').text('Cliente: ', { continued: true })
                .font('Helvetica').text(factura.cliente?.nombre || 'N/A');

            doc.font('Helvetica-Bold').text('Proyecto: ', { continued: true })
                .font('Helvetica').text(factura.proyecto?.nombre_proyecto || 'N/A');

            doc.moveDown(1);

            const montoY = doc.y;
            doc.rect(50, montoY - 5, 200, 30)
                .fillAndStroke('#ecf0f1', '#34495e');

            doc.fillColor('#27ae60')
                .fontSize(14)
                .font('Helvetica-Bold')
                .text(`Monto: $${factura.monto}`, 55, montoY);

            doc.fillColor('#000000').fontSize(12).moveDown(2);

            const colorEstado = factura.estado_pago === 'Pagado' ? '#27ae60' : '#e74c3c';

            doc.font('Helvetica-Bold').text('Estado de pago: ', { continued: true })
                .fillColor(colorEstado)
                .font('Helvetica-Bold')
                .text(factura.estado_pago)
                .fillColor('#000000');

            doc.moveDown(1);

            doc.font('Helvetica-Bold')
                .fillColor('#2980b9')
                .text('DESCRIPCIÓN:', { underline: true });

            doc.fillColor('#000000')
                .font('Helvetica')
                .moveDown(0.3)
                .text(factura.descripcion || '', {
                    align: 'justify',
                    width: 500
                });

            doc.moveDown(2);

            doc.moveTo(50, doc.y + 40)
                .lineTo(300, doc.y + 40)
                .strokeColor('#000000')
                .lineWidth(1)
                .stroke();

            doc.moveDown(3)
                .fontSize(10)
                .font('Helvetica')
                .text('Firma y aclaración', 50, doc.y, { align: 'left', width: 250 });

            doc.end();
        } catch (error) {
            throw new InternalServerErrorException('Error al generar el PDF de la factura', error);
        }
    }
}
