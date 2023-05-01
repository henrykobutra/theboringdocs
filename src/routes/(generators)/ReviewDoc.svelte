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

<section>
	<p class="font-serif">
		Here's a simple "Cookie Policy" that you can use for your {businessType} business.
	</p>
	<p class="font-serif">
		Remember to replace the [Your Name] and [Your Email] placeholders with your own name and email
		address.
	</p>
	<p class="font-serif text-warning">And btw, <span class="font-mono">NOT LEGAL ADVICE!</span></p>
</section>

<div class="card bg-base-100 shadow-md">
	<div class="card-body">
		<article class="prose">
			{@html html}
		</article>
	</div>
</div>
