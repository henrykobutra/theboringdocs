<script>
	import '../app.css';
</script>

<div class="flex flex-col min-h-screen">
	<slot />
	<div class="grow" />
	<footer class="footer mt-10 p-10 bg-base-200 text-base-content">
		<div>
			<!-- TODO: Add footer logo -->
			<p>Henry Kobutra & Co.<br />Making and breaking stuff since 1988</p>
		</div>
		<div>
			<span class="footer-title">Generators</span>
			<a class="link link-hover">Terms & Conditions</a>
			<a class="link link-hover">Privacy Policy</a>
			<a class="link link-hover">Cookie Policy</a>
			<a class="link link-hover">FAQs</a>
			<a class="link link-hover">Payment & Refunds</a>
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
