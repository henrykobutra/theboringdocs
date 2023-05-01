<script lang="ts">
	import { onMount } from 'svelte';
	import MarkdownIt from 'markdown-it';

	export let businessType: string;
	export let businessName: string;
	export let businessEmail: string;

	let md: string;
	let html: string;
	function replaceText(inputString: string, searchText: string, replacementText: string): string {
		const regex = new RegExp(escapeRegExp(searchText), 'g');

		const result = inputString.replace(regex, replacementText);

		return result;
	}
	function escapeRegExp(text: string): string {
		return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	}

	async function loadMarkdown() {
		console.log('loadMarkdown');
		console.log(businessType);
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

			html = MarkdownIt().render(md);
			console.log(html);
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
			Here's a simple "Cookie Policy" starter template that you could use for your {businessType} website.
		</div>
	</div>
	<div class="chat chat-start">
		<div class="chat-image avatar">
			<div class="w-10 rounded-full">
				<img src="/images/henry.png" alt="Henry" />
			</div>
		</div>
		<div class="chat-bubble">
			Remember to replace the [Your Name] and [Your Email] placeholders with your own name and email
			address.
		</div>
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
