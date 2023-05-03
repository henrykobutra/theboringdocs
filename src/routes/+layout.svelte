<script lang="ts">
	import '../app.css';
	const currentYear: string = new Date().getFullYear().toString();
</script>

<div class="flex flex-col min-h-screen">
	<slot />
	<div class="grow" />
	<footer class="footer mt-10 p-10 bg-base-200 text-base-content">
		<div>
			<p>
				<a
					href="https://kobutra.com"
					target="
				">Henry Kobutra & Co.</a
				><br />Still making and breaking stuff in {currentYear}
			</p>
		</div>
		<div>
			<span class="footer-title">Generators</span>
			<a href="/generate-terms" class="link link-hover">Terms & Conditions</a>
			<a href="/generate-privacy" class="link link-hover">Privacy Policy</a>
			<a href="/generate-cookies" class="link link-hover">Cookie Policy</a>
			<a href="/generate-faqs" class="link link-hover">FAQs</a>
			<a href="/generate-payment-refunds" class="link link-hover">Payment & Refunds</a>
		</div>
		<div>
			<span class="footer-title">Read More</span>
			<a href="/why" class="link link-hover">Cool, but why?</a>
			<a href="/other" class="link link-hover">Other Apps</a>
			<a href="https://github.com/henrykobutra" target="_blank" class="link link-hover">Feedback</a>
			<a href="https://www.buymeacoffee.com/henrykobutra" target="_blank" class="link link-hover"
				>Buy me a coffee ☕️</a
			>
		</div>
		<div>
			<span class="footer-title">Boring</span>
			<a href="/terms" class="link link-hover">Terms of use</a>
			<a href="/privacy" class="link link-hover">Privacy policy</a>
			<a href="/cookies" class="link link-hover">Cookie policy</a>
		</div>
	</footer>
</div>
