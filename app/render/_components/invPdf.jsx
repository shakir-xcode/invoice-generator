import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Example custom font (optional)
// Font.register({
//   family: "OpenSans",
//   src: "https://path-to-font/OpenSans-Regular.ttf",
// });

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: "10px",
    fontFamily: "Helvetica",
  },
  boldTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  section: {
    marginBottom: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  companyDetails: {
    width: "48%",
    padding: 10,
    border: "1px solid #000",
  },
  billTo: {
    width: "48%",
    padding: 10,
    border: "1px solid #000",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid #000",
    fontWeight: "bold",
    padding: 5,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
  },
  totalsSection: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  notes: {
    marginTop: 20,
    padding: 10,
    border: "1px solid #000",
  },
  terms: {
    marginTop: 10,
    padding: 10,
    border: "1px solid #000",
  },
});

const invoiceData = {
  invoiceDate: "2025-01-07",
  invoiceNumber: "6240732867",
  dueDate: "2025-01-15",
  companyDetails: "Your company details here",
  billTo: "Client details here",
  items: [
    { description: "Product 1", quantity: 2, rate: 100, amount: 200 },
    { description: "Product 2", quantity: 1, rate: 300, amount: 300 },
  ],
  subtotal: 500,
  tax: 50,
  discount: 20,
  shippingFee: 10,
  total: 540,
  notes: "Additional notes here.",
  terms: "Terms and conditions here.",
};

const InvoicePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <View>
            <Text style={{ ...styles.boldTitle }}>Date: </Text>
            <Text>{invoiceData.invoiceDate}</Text>
          </View>
          <View>
            <Text style={{ ...styles.boldTitle }}>Invoice No: </Text>
            <Text>{invoiceData.invoiceNumber}</Text>
          </View>
          <View>
            <Text style={{ ...styles.boldTitle }}>Due Date: </Text>
            <Text>{invoiceData.dueDate}</Text>
          </View>
        </View>
      </View>

      {/* Company Details and Bill To */}
      <View style={styles.section}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.companyDetails}>
            <Text>Your Company Details:</Text>
            <Text>{invoiceData.companyDetails}</Text>
          </View>
          <View style={styles.billTo}>
            <Text>Bill To:</Text>
            <Text>{invoiceData.billTo}</Text>
          </View>
        </View>
      </View>

      {/* Product Table */}
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableCell}>Description</Text>
          <Text style={styles.tableCell}>Quantity</Text>
          <Text style={styles.tableCell}>Rate</Text>
          <Text style={styles.tableCell}>Amount</Text>
        </View>
        {invoiceData.items.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.description}</Text>
            <Text style={styles.tableCell}>{item.quantity}</Text>
            <Text style={styles.tableCell}>{item.rate}</Text>
            <Text style={styles.tableCell}>{item.amount}</Text>
          </View>
        ))}
      </View>

      {/* Totals */}
      <View style={styles.totalsSection}>
        <View>
          <Text>Subtotal: {invoiceData.subtotal}</Text>
          <Text>Tax: {invoiceData.tax}</Text>
          <Text>Discount: {invoiceData.discount}</Text>
          <Text>Shipping Fee: {invoiceData.shippingFee}</Text>
        </View>
        <View>
          <Text>Total: {invoiceData.total}</Text>
        </View>
      </View>

      {/* Notes and Terms */}
      <View style={styles.notes}>
        <Text>Notes:</Text>
        <Text>{invoiceData.notes}</Text>
      </View>
      <View style={styles.terms}>
        <Text>Terms:</Text>
        <Text>{invoiceData.terms}</Text>
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;
