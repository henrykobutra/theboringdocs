<script lang="ts">
	import { onMount } from 'svelte';
	import { CodeBlock } from 'svhighlight';
	import MarkdownIt from 'markdown-it';
	import removeMarkdown from 'remove-markdown';
	import 'highlight.js/styles/agate.css';

	export let businessType: string;
	export let businessName: string;
	export let businessEmail: string;

	let md: string;
	let docFormat = 'plaintext';
	let plaintext: string;
	let html: string;
	let code: string;

	async function loadMarkdown() {
		try {
			if (businessType === 'app') {
				md = (await import('./generate-cookies/app.md?raw')).default;
			} else if (businessType === 'ecommerce') {
				md = (await import('./generate-cookies/ecommerce.md?raw')).default;
			} else if (businessType === 'content-creator') {
				md = (await import('./generate-cookies/content-creator.md?raw')).default;
			} else if (businessType === 'freelancer') {
				md = (await import('./generate-cookies/freelancer.md?raw')).default;
			}

			if (businessEmail != '') {
				md = replaceText(md, '[Your Email]', businessEmail);
			}
			if (businessName != '') {
				md = replaceText(md, '[Your Name]', businessName);
			}

			plaintext = removeMarkdown(md);
			html = MarkdownIt().render(md);
		} catch (error) {
			console.error('Error loading the markdown file:', error);
		}
	}

	onMount(async () => {
		loadMarkdown().then(() => {
			code = plaintext;
		});
	});

	function replaceText(inputString: string, searchText: string, replacementText: string): string {
		const regex = new RegExp(escapeRegExp(searchText), 'g');

		const result = inputString.replace(regex, replacementText);

		return result;
	}
	function escapeRegExp(text: string): string {
		return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	}

	$: {
		if (docFormat === 'plaintext') {
			code = plaintext;
		} else if (docFormat === 'md') {
			code = md;
		} else if (docFormat === 'html') {
			code = html;
		}
	}
</script>

<p class="font-mono text-warning">NOT LEGAL ADVICE</p>
<div class="flex justify-end w-full">
	<div class="tabs tabs-boxed">
		<button
			class="tab {docFormat === 'plaintext' ? 'tab-active' : ''}"
			on:click={() => (docFormat = 'plaintext')}>Plain</button
		>
		<button class="tab {docFormat === 'md' ? 'tab-active' : ''}" on:click={() => (docFormat = 'md')}
			>MD</button
		>
		<button
			class="tab {docFormat === 'html' ? 'tab-active' : ''}"
			on:click={() => (docFormat = 'html')}>HTML</button
		>
	</div>
</div>
{#key code}
	<CodeBlock {code} language={docFormat} showLineNumbers={false} />
{/key}
