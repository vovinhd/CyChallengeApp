<script>
	import { ANIMATION_BASE_SPEED } from '$lib/animations/page-transition-anim';
	import { blur } from 'svelte/transition';

	import LottieAnim from '$lib/animations/lottie-anim.svelte';
</script>

<div
	class="grid grid-flow-row bg-white p-4 m-4 rounded-lg"
	in:blur={{ duration: ANIMATION_BASE_SPEED, delay: ANIMATION_BASE_SPEED }}
	out:blur={{ duration: ANIMATION_BASE_SPEED }}
>
	<div class="text-xl text-center font-serif font-bold pb-4">
		<h1>Big Points &amp; Challenges</h1>
	</div>

	<div class="h-80 w-72 mx-auto">
		<LottieAnim
			assetPath="/lottie/104853-thinking.json"
			animOptions={{ loop: 1, autoplay: true }}
		/>
	</div>
	<div>
		Big Points sind die Bereiche in unserem Leben, in denen es einen richtig großen Unterschied
		macht, ob wir uns klimafreundlich verhalten oder nicht. Challenges helfen uns, für einen
		begrenzten Zeitraum aus unserer Komfortzone herauszutreten und neue Handlungen auszuprobieren.
	</div>
</div>
