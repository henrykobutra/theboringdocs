export function friendly(text: string): string {
	const replacements: { [key: string]: string } = {
		'generate-cookies': 'Cookie Policy',
		'generate-faqs': 'FAQs',
		'generate-payment-refunds': 'Payment & Refunds Policy',
		'generate-privacy': 'Privacy Policy',
		'generate-terms': 'Terms & Conditions',
		app: 'App',
		'content-creator': 'Content ',
		ecommerce: 'Ecommerce',
		freelancer: 'Freelancer, Agency, or Consultancy',
	};

	for (const [oldWord, newWord] of Object.entries(replacements)) {
		text = text.replace(new RegExp(oldWord, 'gi'), newWord);
	}

	return text;
}
