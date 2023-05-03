<script lang="ts">
	import '../app.css';
	const currentYear: string = new Date().getFullYear().toString();
</script>

<div class="flex flex-col min-h-screen">
	<slot />
	<div class="grow" />
	<footer class="footer mt-10 p-10 bg-base-200 text-base-content">
		<div>
			<!-- TODO: Add footer logo -->
			<p>Henry Kobutra & Co.<br />Still making and breaking stuff in {currentYear}</p>
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
			<a class="link link-hover">Cool, but why?</a>
			<a class="link link-hover">Other Apps</a>
			<a class="link link-hover">Feedback</a>
			<a class="link link-hover">Buy me a coffee ☕️</a>
		</div>
		<div>
			<span class="footer-title">Boring</span>
			<a class="link link-hover">Terms of use</a>
			<a class="link link-hover">Privacy policy</a>
			<a class="link link-hover">Cookie policy</a>
		</div>
	</footer>
</div>
