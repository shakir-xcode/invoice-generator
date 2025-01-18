
const fDate = d => {
  const date = new Date(d);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export const formatData = invoiceData => {
  let formattedDate = "";
  let formattedDueDate = "";
  let updatedLogo = null;

  if (invoiceData?.date) {
    formattedDate = fDate(invoiceData.date);
  }
  if (invoiceData?.due_date) {
    formattedDueDate = fDate(invoiceData.due_date);
  }

  if (invoiceData?.logo?.length && invoiceData?.logo[0]?.name) {
    // Generate a new name with a timestamp
    const timestamp = Date.now();
    const originalLogo = invoiceData.logo[0];
    const newLogoName = `${timestamp}_${originalLogo.name}`;

    // Create a new File object with the updated name
    updatedLogo = new File([originalLogo], newLogoName, {
      type: originalLogo.type,
    });

  }

  return {
    ...invoiceData,
    products: [...invoiceData.products],
    logo: updatedLogo,
    date: formattedDate,
    due_date: formattedDueDate
  }
}

export const renameLogo = invoiceData => {
  if (!invoiceData?.logo?.length)
    return {
      ...invoiceData,
      products: [...invoiceData.products],
    }

  console.log("Logo name: ")
  console.log(logo[0].name)
}