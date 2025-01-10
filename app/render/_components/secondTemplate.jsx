"use client";

import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
  PDFViewer,
} from "@react-pdf/renderer";

// Example custom font (optional)
// Font.register({
//   family: "OpenSans",
//   src: "https://path-to-font/OpenSans-Regular.ttf",
// });

const styles = StyleSheet.create({
  viewer: {
    width: "100vw",
    minHeight: "100vw",
  },
  page: {
    padding: 20,
    fontSize: 4,
    fontFamily: "Helvetica",
    color: "#333",
  },
  boldTitle: {
    fontSize: 12,
    fontWeight: "extrabold",
  },
  divider: {
    marginTop: "10px",
  },
  paddingX: {
    paddingLeft: "36px",
    paddingRight: "36px",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  twoColumn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "18px",
    paddingBottom: "18px",
    backgroundColor: "#e63946",
    color: "#fff",
  },
  headerText: {
    // fontSize: 20,
    fontWeight: "bold",
  },
  invoiceDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "1px",
  },
  section: {
    marginTop: 10,
    padding: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    color: "#e63946",
    marginBottom: 2,
  },
  table: {
    marginTop: 10,
    borderRadius: 0,
    overflow: "hidden",
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#e63946",
    color: "#fff",
    padding: 5,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
  },
  termsAndNotesContainer: {
    display: "flex",
    flexDirection: "column",
  },
  tableFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 5,
  },
  totals: {
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  tn: {
    color: "#555",
  },
});

const invoiceData = {
  invoiceDate: "2025-01-07",
  dueDate: "2025-01-18",
  invoiceNumber: "935648",
  companyDetails: `street 56 blue lake, New York, USA \nPhone: 1234 5678 9012 \nEmail: info@example.com \nWebsite: www.peidpiper.com \n`,
  billTo: `450 E 96th St, Indianapolis, WRHX+8Q IN 46240, United States \nPhone: 1234 5678 9012 \nEmail: info@example.com \n`,
  items: [
    {
      description: "Easy Chicken Masala",
      rate: "$25.00",
      quantity: 1,
      amount: "$25.00",
    },
    {
      description: "Boiled Organic Egg",
      rate: "$10.00",
      quantity: 3,
      amount: "$30.00",
    },
    {
      description: "Grilled Smoked Chicken",
      rate: "$100.00",
      quantity: 2,
      amount: "$200.00",
    },
    {
      description: "Party Platter Wings",
      rate: "$150.00",
      quantity: 1,
      amount: "$150.00",
    },
  ],
  subtotal: "$405.00",
  tax: "$0.00",
  total: "$405.00",
  terms: "Authoritatively envisioned business action items through parallel.",
};

const SecondePdfTemplate = () => (
  // <PDFViewer style={styles.viewer}>
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}

      <View style={{ ...styles.header, ...styles.paddingX }}>
        <Text style={styles.headerText}>INVOICE</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            // width: "120px",
            // border: "1px solid black",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
            <Text style={{ ...styles.boldTitle }}>Date: </Text>
            <Text>{invoiceData.invoiceDate}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
            <Text style={{ ...styles.boldTitle }}>Invoice No: </Text>
            <Text>{invoiceData.invoiceNumber}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
            <Text style={{ ...styles.boldTitle }}>Due Date: </Text>
            <Text>{invoiceData.dueDate}</Text>
          </View>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider}></View>
      <View style={styles.divider}></View>

      {/* two column, company and client */}
      <View
        style={{
          ...styles.twoColumn,
          justifyContent: "flex-start",
          gap: "56px",
          ...styles.paddingX,
          // border: "1px solid black",
        }}
      >
        <View style={{ ...styles.flexCol, width: "40%" }}>
          <Text style={{ ...styles.sectionTitle, ...styles.boldTitle }}>
            From
          </Text>
          <View style={{ ...styles.flexCol, gap: 0 }}>
            {invoiceData.companyDetails.split("\n").map((line, index) => (
              <Text key={index} style={{ padding: 1 }}>
                {line}
              </Text>
            ))}
          </View>
        </View>

        <View style={{ ...styles.flexCol, width: "40%" }}>
          <Text style={{ ...styles.sectionTitle, ...styles.boldTitle }}>
            To
          </Text>
          <View style={{ ...styles.flexCol, gap: 0 }}>
            {invoiceData.billTo.split("\n").map((line, index) => (
              <Text key={index}>{line}</Text>
            ))}
          </View>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider}></View>

      {/* Table */}
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableCell}>SL</Text>
          <Text style={styles.tableCell}>Item Description</Text>
          <Text style={styles.tableCell}>Price</Text>
          <Text style={styles.tableCell}>Qty</Text>
          <Text style={styles.tableCell}>Total</Text>
        </View>
        {invoiceData.items.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{index + 1}</Text>
            <Text style={styles.tableCell}>{item.description}</Text>
            <Text style={styles.tableCell}>{item.rate}</Text>
            <Text style={styles.tableCell}>{item.quantity}</Text>
            <Text style={styles.tableCell}>{item.amount}</Text>
          </View>
        ))}
      </View>

      {/* Divider */}
      <View style={styles.divider}></View>
      <View style={styles.divider}></View>
      <View style={styles.divider}></View>
      <View style={styles.divider}></View>

      {/* Terms, notes and totals */}
      <View
        style={{
          ...styles.twoColumn,
          alignItems: "flex-start",
          ...styles.paddingX,
          // border: "1px solid black",
        }}
      >
        <View style={styles.termsAndNotesContainer}>
          {/* Terms & Conditions */}
          <View style={{ ...styles.flexCol }}>
            <Text style={{ fontWeight: "bold", ...styles.boldTitle }}>
              Terms & Conditions
            </Text>
            <Text style={styles.tn}>{invoiceData.terms}</Text>
          </View>

          <View style={styles.divider}></View>
          {/* Note */}
          <View style={{ ...styles.flexCol }}>
            <Text style={{ fontWeight: "bold", ...styles.boldTitle }}>
              Notes
            </Text>
            <Text style={{ ...styles.tn }}>
              This is a computer-generated receipt and does not require a
              physical signature.
            </Text>
          </View>
        </View>

        {/* Totals */}
        <View style={styles.totals}>
          <Text>Sub Total: {invoiceData.subtotal}</Text>
          <Text>Tax: {invoiceData.tax}</Text>
          <Text>Total: {invoiceData.total}</Text>
        </View>
      </View>
    </Page>
  </Document>
  // </PDFViewer>
);

export default SecondePdfTemplate;
