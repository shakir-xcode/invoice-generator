import fs from "fs";

const root = process.cwd() + '/lib/backend-logic/invoice/invoice-templates';

const getTemplatePath = (template_id) => {
	const tId = template_id || 100;
	return {
		invoiceTemplate: `${root}/template_${tId}/template.html`,
		productsTemplate: `${root}/template_${tId}/products_template.html`,
		css: `${root}/template_${tId}/style.css`
	}
}

export const getTemplate = (templateId) => {

	try {

		const html = fs.readFileSync(`${getTemplatePath(templateId).invoiceTemplate}`, 'utf-8');
		const products_template = fs.readFileSync(`${getTemplatePath(templateId).productsTemplate}`, 'utf-8');
		const css = fs.readFileSync(`${getTemplatePath(templateId).css}`, 'utf-8');

		return [html, css, products_template];
	} catch (error) {
		throw new Error(error.message);
	}
}
