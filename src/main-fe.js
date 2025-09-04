// main-fe.js

import { ClassicEditor, editorConfig } from "./main.js";

// 1. Move style imports from main.js here.
import "ckeditor5/ckeditor5.css";
import "./ckeditor5-premium-features.css";
import "./style.css";

editorConfig.pagination = {
  // A4 page size
  pageWidth: "210mm",
  pageHeight: "297mm",

  pageMargins: {
    top: "60mm",
    bottom: "60mm",
    left: "12mm",
    right: "12mm",
  },
};

// 2. Set initial data for the editor
editorConfig.initialData = `<html style="background-color: rgb(176, 176, 176);"><head>
	<title></title>
</head><body originalheight="297mm" originalwidth="210.01mm" style="transform-origin: left top; transform: scale(1); zoom: 1; width: 146mm; background-color: rgb(255, 255, 255); margin: 25mm 30mm; font-family: Calibri; font-size: 12pt;">
<div class="protected-block" contenteditable="false">
    <div style="font-family:Calibri;font-size:12pt;" id="Report_-_Prelim_heading___Insurer_details">
        <title></title>
        <div style="text-align:center;">
            <figure class="table" data-is-editable="false">
                <table style="border-style:none;" align="center" border="0" cellpadding="0" cellspacing="0" data-is-editable="false">
                    <tbody>
                        <tr>
                            <td style="user-select:none;" contenteditable="false">
                                <div>
                                    <figure class="table" style="width:99%;">
                                        <table style="border-style:none;" border="0" cellspacing="0" data-is-editable="false">
                                            <tbody>
                                                <tr>
                                                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:middle;width:40%;">
                                                        <p style="text-align:left;">
                                                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Our Ref:&nbsp;VWC.24001588.9-001</span></span>
                                                        </p>
                                                    </td>
                                                    <td style="user-select:none;" contenteditable="false">
                                                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Adjuster:</span></span>
                                                    </td>
                                                    <td style="user-select:none;" contenteditable="false">
                                                        <p style="text-align:left;">
                                                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">&nbsp;Marisa&nbsp;Lança&nbsp;</span></span><span style="color:white;font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">-</span></span>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="user-select:none;" contenteditable="false">
                                                        <p style="text-align:left;">
                                                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:18pt;"><span contenteditable="false"><strong>Retained Authority</strong></span></span>
                                                        </p>
                                                    </td>
                                                    <td style="user-select:none;" contenteditable="false">
                                                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Date of Report:</span></span>
                                                    </td>
                                                    <td style="user-select:none;" contenteditable="false">
                                                        <p style="text-align:left;">
                                                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">&nbsp;3 September 2025</span></span>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </figure>
                                    <p>
                                        <br>
                                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong><u>PRELIMINARY REPORT</u></strong></span><br>
                                        &nbsp;
                                    </p>
                                </div>
                                <div>
                                    <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span>Client W&amp;C 1</span></span>
                                </div>
                                <div>
                                    &nbsp;
                                </div>
                                <hr>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </figure>
        </div>
    </div>
</div>
<div class="protected-block" contenteditable="false">
    <div style="font-family:Calibri;font-size:12pt;" id="Report_-_Prelim_Information_table_fixed">
        <title></title>
        <figure class="table" style="float:left;" data-is-editable="false">
            <table style="border-style:none;" border="0" cellpadding="1" cellspacing="0" data-is-editable="false">
                <tbody>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">POLICY NUMBER:</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">548796</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">CLAIM NUMBER:</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">625147</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">NAME AND ADDRESS OF INSURED:</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Will Atkins</span></span><br>
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Mr. Will Atkins</span></span><br>
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">22&nbsp;Downtown Abbey</span></span><br>
                            <span style="color:white;font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">----</span></span><span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">LONDON</span></span><br>
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">CB4 0GH</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">SITUATION OF DAMAGE:</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Knightstone Court&nbsp;St. Stephens Place</span></span><br>
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Trowbridge</span></span><br>
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span class="mergefield" fieldname="«Event_PostalCode»" tabindex="-1" unselectable="off" contenteditable="false">«Event_PostalCode»</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">CAUSE:</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Accidental Damage or Loss&nbsp;–&nbsp;Accidental Damage/TV Video</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">DATE OF LOSS:</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">4 December 2024</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">RESERVE:</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span class="mergefield" contenteditable="false" fieldname="«Report_TotalAllBalReserves»" tabindex="-1" unselectable="off">«Report_TotalAllBalReserves»</span></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p style="text-align:left;text-indent:0pt;">
            &nbsp;
        </p>
    </div>
</div>
<div style="font-family:Calibri;font-size:12pt;" id="Report_-_Prelim_Information_table_amend">
    <title></title>
    <figure class="table" style="float:left;" data-is-editable="true">
        <table style="border-collapse:collapse;border-style:none;" border="0" cellpadding="1" cellspacing="0" data-is-editable="true">
            <tbody>
                <tr>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:40%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">DATE OF VISIT:</span>
                    </td>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:60%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:40%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">TRADE/OCCUPATION/BUSINESS:</span>
                    </td>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:60%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:40%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">VAT STATUS:</span>
                    </td>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:60%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:40%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">USAGE OF BUILDING:</span>
                    </td>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:60%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:40%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">POINT OF ORIGIN:</span>
                    </td>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:60%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:40%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">RECOVERY PROSPECTS:</span>
                    </td>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:60%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:40%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">INSTRUCTIONS REQUIRED:</span>
                    </td>
                    <td style="border-style:none;padding:0px;text-align:left;vertical-align:top;width:60%;">
                        &nbsp;
                    </td>
                </tr>
            </tbody>
        </table>
    </figure>
    <p style="text-align:left;text-indent:0pt;">
        &nbsp;
    </p>
</div>
<div class="protected-block" contenteditable="false">
    <div style="font-family:Calibri;font-size:12pt;" id="Financial_reserve_table_complete">
        <title></title>
        <p style="padding-top:2pt;text-align:left;text-indent:0pt;">
            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>New complete table for financial reports</strong></span>
        </p>
        <figure class="table" style="float:left;" data-is-editable="false">
            <table border="1" cellpadding="10" cellspacing="0" data-is-editable="false">
                <tbody>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Coverage/HOC</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Item of loss</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Insured item</span></span>
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
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Contents</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Compensation for material damage</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            &nbsp;
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£1.500,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£823,22</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£2.323,22</span></span><span style="color:white;font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">-</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Contents</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Compensation for material damage</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Coffe Machine</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£10.000,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£3.000,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£3.000,00</span></span><span style="color:white;font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">-</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Contents</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Compensation for material damage</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">This is a really large insured item to test the field and see what happens on th</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£11.111,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£100,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£100,00</span></span><span style="color:white;font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">-</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">EL</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Material damages</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            &nbsp;
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£600,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£3.400,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£4.000,00</span></span><span style="color:white;font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">-</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">EL</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Material damages</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            &nbsp;
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
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£30.000,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£30.000,00</span></span><span style="color:white;font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">-</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">EL</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Material damages</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            &nbsp;
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
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£90,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£90,00</span></span><span style="color:white;font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">-</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">EL</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Material damages</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Insured item for EL coverage</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£655,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£155,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£155,00</span></span><span style="color:white;font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">-</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">EL</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Material damages</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">Insured item for EL coverage</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£655,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£0,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£100,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£100,00</span></span><span style="color:white;font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">-</span></span>
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
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£1.385,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£10,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£1.305,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£2.700,00</span></span>
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
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£200,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£100,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£400,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£700,00</span></span>
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
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£3.085,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£710,00</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£39.373,22</span></span>
                        </td>
                        <td style="user-select:none;" contenteditable="false">
                            <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span contenteditable="false">£43.168,22</span></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p class="s1" style="padding-left:2pt;text-align:left;text-indent:0pt;">
            &nbsp;
        </p>
    </div>
</div>
<div style="font-family:Calibri;font-size:12pt;" id="Report_-_Prelim_Content_headings">
    <title></title>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>PREMISES (including description):</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>DESCRIPTION OF BUSINESS:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>CIRCUMSTANCES:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>DISCOVERY:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>SPREAD AND STOP:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>EXTINGUISHMENT:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>NATURE AND EXTENT OF DAMAGE:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>ENTRY/EXIT:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>POLICE:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>INITIAL MEASURES:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>PREVIOUS LOSSES:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>WARRANTIES/POLICY LIABILITY:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>UNDERWRITING FEATURES:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>RECOVERY PROSPECTS:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>RESERVE (Rationale):</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>APPOINTMENT OF ASSESSORS:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>CLAIM FEATURES:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>ADEQUACY of SUMS INSURED:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>SECURITY:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>SALVAGE:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>OTHER INSURANCES AND CONTRIBUTIONS:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>INSTRUCTIONS REQUIRED:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>ESTIMATED CLOSURE DATE:</strong></span><br>
        <span style="font-size:12pt;">&nbsp;</span>
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>ENCLOSURES:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>FEE:</strong></span><br>
        &nbsp;
    </p>
    <p>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong>MILESTONE DATA</strong></span> &nbsp;
    </p>
    <figure class="table" data-is-editable="true">
        <table border="1" cellpadding="1" cellspacing="1" data-is-editable="true">
            <tbody>
                <tr>
                    <td style="padding:0px;width:80%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">Date Loss Mitigation Commenced</span>
                    </td>
                    <td style="padding:0px;width:20%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="padding:0px;width:80%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">Date Loss Mitigation Completed</span>
                    </td>
                    <td style="padding:0px;width:20%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="padding:0px;width:80%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">Date BER List Received</span>
                    </td>
                    <td style="padding:0px;width:20%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="padding:0px;width:80%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">Date Contents Claim Settled</span>
                    </td>
                    <td style="padding:0px;width:20%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="padding:0px;width:80%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">Date Schedule of Works Received</span>
                    </td>
                    <td style="padding:0px;width:20%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="padding:0px;width:80%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">Date Schedule of Works Approved</span>
                    </td>
                    <td style="padding:0px;width:20%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="padding:0px;width:80%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">Date Building Costs Authorised / Cash Settlement offered</span>
                    </td>
                    <td style="padding:0px;width:20%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="padding:0px;width:80%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">Date Repairs Started</span>
                    </td>
                    <td style="padding:0px;width:20%;">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td style="padding:0px;width:80%;">
                        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;">Date Repairs Completed / Cash Settlement Agreed</span>
                    </td>
                    <td style="padding:0px;width:20%;">
                        &nbsp;
                    </td>
                </tr>
            </tbody>
        </table>
    </figure>
    <p>
        &nbsp;
    </p>
    <p>
        <br>
        <br>
        &nbsp;
    </p>
</div>
<div class="protected-block" contenteditable="false">
    <div style="font-family:Calibri;font-size:12pt;" id="Report_-_Handler_signoff">
        <title></title><br>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><span>Marisa</span>&nbsp;<span>Lança</span>&nbsp;</span><br>
        <span style="font-family:calibri,verdana,geneva,sans-serif;font-size:12pt;"><strong><u>WOODGATE&nbsp; &amp; CLARK LIMITED</u></strong></span>
    </div>
</div>
</body></html>
`;

// 3. Initialize editor
ClassicEditor.create(document.querySelector("#editor"), editorConfig)
  .then((editor) => {
    editor.execute("togglePaginationView");
  })
  .catch((error) => {
    console.error("Error initializing editor:", error);
  });
