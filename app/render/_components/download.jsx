"use client";

import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "./invPdf";
import SecondePdfTemplate from "./secondTemplate";

const Download = () => {
  return (
    <div className="container">
      <h1>Invoice Generator</h1>
      <PDFDownloadLink
        document={<SecondePdfTemplate />}
        fileName="invoice.pdf"
        className="download-link"
      >
        {({ loading }) => (loading ? "Generating PDF..." : "Download Invoice")}
      </PDFDownloadLink>
    </div>
  );
};

export default Download;
