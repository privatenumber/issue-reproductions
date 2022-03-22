<script setup>
import { useRoute } from 'vitepress';

const route = useRoute();
console.log(`\n\nBUG: "route.path" is different across server and client: "${route.path}"\n\n`);
</script>

Hello world
