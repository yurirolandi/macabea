<template>
    <div class="card">
        <b-card bg-variant="dark"  :header="cardTitle" text-variant="white" class="text-center">
        <b-card-text>
         <font-awesome-icon :icon="cardIcon" />  {{ cardText }}
        </b-card-text>
      </b-card>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ["cardText", "cardIcon", "cardTitle"]
}
</script>

