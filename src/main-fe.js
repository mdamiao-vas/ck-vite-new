// main-fe.js

import { ClassicEditor, editorConfig } from "./main.js";

// 1. Move style imports from main.js here.
import "ckeditor5/ckeditor5.css";
import "./ckeditor5-premium-features.css";
import "./style.css";

// 2. Set initial data for the editor
editorConfig.initialData = `<html style="background-color: rgb(176, 176, 176);"><head>
	<title></title>
</head><body originalheight="297mm" originalwidth="210.01mm" style="transform-origin: left top; transform: scale(1); zoom: 1; width: 146mm; background-color: rgb(255, 255, 255); margin: 25mm 30mm; font-family: Calibri; font-size: 12pt;">
<div class="protected-block" contenteditable="false">
    <div style="font-family:Calibri;font-size:12pt;" id="Financial_reserve_table_complete">
        <title></title>
        <p style="padding-top:2pt;text-align:left;text-indent:0pt;">
            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>New complete table for financial reports</strong></span>
        </p>
        <figure class="table" style="float:left;width:100%;" data-is-editable="false">
            <table border="1" cellpadding="10" cellspacing="0" data-is-editable="false">
                <tbody>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Coverage/HOC</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span contenteditable="false">Item of loss</span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span contenteditable="false">Insured item</span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">&nbsp;Sums Insured</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Previous Payments (paid amount)</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Payment Proposal</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Balance of Reserve (Outstanding –&nbsp;Proposal)</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Total Incurred (initial reserve)</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span><span contenteditable="false">Alternative Accommodation</span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span contenteditable="false">Compensation for material damage</span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span contenteditable="false">£0,00</span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span contenteditable="false">£0,00</span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span contenteditable="false">£0,00</span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span contenteditable="false">£1.000,00</span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span contenteditable="false">£1.000,00</span><span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Handling fees (handling fees + aditional costs)</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£750,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£750,00</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Disbursement</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Totals</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£1.750,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£1.750,00</span></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p class="s1" style="padding-left:2pt;text-align:left;text-indent:0pt;">
            &nbsp;
        </p>
        <figure class="table" style="width:500px;">
            <table border="1" cellpadding="1" cellspacing="1">
                <tbody>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span class="mergefield" fieldname="«ReportsReserveFinancial_ReservePaymProp»" tabindex="-1" unselectable="off" contenteditable="false">«ReportsReserveFinancial_ReservePaymProp»</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span contenteditable="false">DISB mf decimal</span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span class="mergefield" fieldname="«ReportsReserveFinancial_ReservePaymProp»" tabindex="-1" unselectable="off" contenteditable="false">«ReportsReserveFinancial_ReservePaymProp»</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </figure>
    </div>
</div>
<div class="protected-block" contenteditable="false">
    <div style="font-family:Calibri;font-size:12pt;" id="Financial_table_complete">
        <title></title>
        <p style="padding-top:2pt;text-align:left;text-indent:0pt;">
            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>Reserve table for financial reports</strong></span>
        </p>
        <figure class="table" style="float:left;width:100%;">
            <table border="1" cellpadding="10" cellspacing="0">
                <tbody>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Coverage/HOC</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">&nbsp;Sums Insured</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Previous Payments (paid amount)</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Payment Proposal</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Balance of Reserve (Outstanding –&nbsp;Proposal)</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Total Incurred (initial reserve)</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Alternative Accommodation&nbsp;</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£1.000,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£1.000,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£1.000,00</span></span><span style="color:white;font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">-</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Handling fees (handling fees + aditional costs)</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£750,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£750,00</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Disbursement</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Totals</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="color:white;"><span contenteditable="false">-</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£1.750,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£1.750,00</span></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p class="s1" style="padding-left:2pt;text-align:left;text-indent:0pt;">
            &nbsp;
        </p>
        <p style="text-align:left;text-indent:0pt;">
            &nbsp;
        </p>
    </div>
</div>
</body></html>
`;

// 3. Initialize editor
ClassicEditor.create(document.querySelector("#editor"), editorConfig)
  .then((editor) => {
    console.log("Editor initialized successfully!");
  })
  .catch((error) => {
    console.error("Error initializing editor:", error);
  });
