<script lang="ts">
	import { onMount } from 'svelte';
	import MarkdownIt from 'markdown-it';
	import { friendly } from '$lib/utils/words';

	export let businessType: string;
	export let businessName: string;
	export let businessEmail: string;
	export let linkToPrivacyPolicy: string;
	export let linkToPaymentAndRefundsPolicy: string;
	export let location: string;
	export let refundPeriod: string;
	export let servicesOffered: string;
	export let generatorType: string;
	export let policyMarkdown: string;

	let html: string;
	let pathToMarkdown = generatorType + '/' + businessType;

	function replaceText(inputString: string, searchText: string, replacementText: string): string {
		const regex = new RegExp(escapeRegExp(searchText), 'g');
		const result = inputString.replace(regex, replacementText);
		return result;
	}
	function escapeRegExp(text: string): string {
		return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	}

	async function loadMarkdown() {
		try {
			policyMarkdown = (await import('./' + pathToMarkdown + '.md?raw/* @vite-ignore */')).default;

			if (businessEmail != '') {
				policyMarkdown = replaceText(policyMarkdown, '[Your Email]', businessEmail);
			}
			if (businessName != '') {
				policyMarkdown = replaceText(policyMarkdown, '[Your Name]', businessName);
			}
			if (linkToPrivacyPolicy != '') {
				const privacyPolicyRegex = /\[Privacy Policy\]\(#\)/g;
				const privacyPolicyReplacement = `[Privacy Policy](${linkToPrivacyPolicy})`;
				policyMarkdown = policyMarkdown.replace(privacyPolicyRegex, privacyPolicyReplacement);
			}
			if (linkToPaymentAndRefundsPolicy != '') {
				const paymentAndRefundsPolicyRegex = /\[Payment & Refunds Policy\]\(#\)/g;
				const paymentAndRefundsPolicyReplacement = `[Payment & Refunds Policy](${linkToPaymentAndRefundsPolicy})`;
				policyMarkdown = policyMarkdown.replace(
					paymentAndRefundsPolicyRegex,
					paymentAndRefundsPolicyReplacement,
				);
			}
			if (location != '') {
				policyMarkdown = replaceText(policyMarkdown, '[Your Location]', location);
			}
			if (refundPeriod != '') {
				policyMarkdown = replaceText(policyMarkdown, '[Refund Period]', refundPeriod);
			}
			if (servicesOffered != '') {
				policyMarkdown = replaceText(policyMarkdown, '[Services Offered]', servicesOffered);
			}

			html = MarkdownIt().render(policyMarkdown);
		} catch (error) {
			console.error('Error loading the markdown file:', error);
		}
	}

	onMount(async () => {
		loadMarkdown();
	});
</script>

<section class="mb-4">
	<div class="chat chat-start">
		<div class="chat-image avatar">
			<div class="w-10 rounded-full">
				<img src="/images/henry.png" alt="Henry" />
			</div>
		</div>
		<div class="chat-header">
			Henry K.
			<time class="text-xs opacity-50">Just now</time>
		</div>
		<div class="chat-bubble">
			Here's a simple <strong>"{friendly(generatorType)}"</strong> starter template that you could
			use for your <strong>{friendly(businessType)}</strong> website.
		</div>
	</div>
	{#if businessEmail === '' || businessName === ''}
		<div class="chat chat-start">
			<div class="chat-image avatar">
				<div class="w-10 rounded-full">
					<img src="/images/henry.png" alt="Henry" />
				</div>
			</div>
			<div class="chat-bubble">
				Remember to replace the{businessName === '' ? ' [Your Name] ' : ''}{businessName === '' &&
				businessEmail === ''
					? 'and'
					: ''}{businessEmail === '' ? ' [Your Email] ' : ''}placeholder{businessName === '' &&
				businessEmail === ''
					? 's'
					: ''} with your own.
			</div>
		</div>
	{/if}
	<div class="chat chat-start">
		<div class="chat-image avatar">
			<div class="w-10 rounded-full">
				<img src="/images/isabella.png" alt="Isabella" />
			</div>
		</div>
		<div class="chat-header">
			The Boring Bot
			<time class="text-xs opacity-50">Just now</time>
		</div>
		<div class="chat-bubble chat-bubble-warning">Oh and this is NOT LEGAL ADVICE.</div>
	</div>
</section>

<div class="card bg-base-100 shadow-md">
	<div class="card-body">
		<article class="prose">
			{@html html}
		</article>
	</div>
</div>
