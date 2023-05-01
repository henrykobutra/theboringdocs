<script lang="ts">
	import { CodeBlock } from 'svhighlight';
	import MarkdownIt from 'markdown-it';
	import removeMarkdown from 'remove-markdown';
	import 'highlight.js/styles/agate.css';

	export let policyMarkdown: string;

	let docFormat = 'plaintext';
	let plaintext: string = removeMarkdown(policyMarkdown);
	let html: string = MarkdownIt().render(policyMarkdown);
	let code: string = plaintext;

	$: {
		if (docFormat === 'plaintext') {
			code = plaintext;
		} else if (docFormat === 'md') {
			code = policyMarkdown;
		} else if (docFormat === 'html') {
			code = html;
		}
	}
</script>

<section class="mb-4 w-full">
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
		<div class="chat-bubble">Go ahead and copy whatever format suits you best!</div>
	</div>
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
		<div class="chat-bubble chat-bubble-warning">Again, this is NOT LEGAL ADVICE.</div>
	</div>
</section>
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
