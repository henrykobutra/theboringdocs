<script>
	import DocCard from './DocCard.svelte';
</script>

<svelte:head>
	<title>The Boring Docs - Free and Simple Policy Templates for Your Website</title>
	<meta
		name="description"
		content="Don't waste your time drafting policies from scratch! The Boring Docs offers free and simple policy templates for your website, including Terms and Conditions, Privacy Policy, Cookie Policy, Payment and Refunds Policy, and FAQs."
	/>
</svelte:head>
<div class="flex flex-col items-center">
	<section class="text-center py-8">
		<h1 class="font-bold text-7xl">The Boring Docs</h1>
		<h2 class="font-serif text-base mt-4">
			Probably the most boring docs your website ever needs, and nobody never reads, lol.
		</h2>
		<p class="font-mono text-sm mt-8">Need some starter templates?</p>
		<p class="font-mono text-xs mt-2 text-warning">Btw, not legal advice!</p>
	</section>
	<div class="flex flex-wrap gap-4 max-w-screen-xl justify-center">
		<DocCard
			title="Terms and Conditions"
			url="/generate-terms"
			jokeQuestion="Why do websites have terms and conditions?"
			jokeResponse="...why?"
			jokeAnswer="Because they want to make sure you read all the legal jargon before clicking &quot;I Agree&quot; and giving away your firstborn child!"
		/>
		<DocCard
			title="Privacy Policy"
			url="/generate-privacy"
			jokeQuestion="Why did the privacy policy have trust issues?"
			jokeResponse="Ugh..."
			jokeAnswer="Because it was constantly asking &quot;Are you sure you want to share that?&quot;!"
		/>
		<DocCard
			title="Cookie Policy"
			url="/generate-cookies"
			jokeQuestion="Why did the cookie policy feel sad?"
			jokeResponse="not again!!!!"
			jokeAnswer="Because it felt crumby about collecting all those cookies without ever getting to taste them!"
		/>
		<DocCard
			title="FAQs"
			url="/generate-faqs"
			jokeQuestion="Why did the FAQ section go on strike?"
			jokeResponse="plzzzz"
			jokeAnswer="Because it was tired of answering the same questions over and over again, without ever getting a raise!"
		/>
		<DocCard
			title="Payment & Refunds Policy"
			url="/generate-payment-refunds"
			jokeQuestion="Why did the Payment and Refunds Policy start telling jokes?"
			jokeResponse="STAHPPPP"
			jokeAnswer="Because it wanted to get paid for its sense of humor, and it had a strict &quot;no refunds&quot; policy on laughter!"
		/>
	</div>
</div>
