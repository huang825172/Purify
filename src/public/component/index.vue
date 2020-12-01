<template>
  <div>
    <button type="button" class="btn btn-primary" @click="to_void()">
      {{ message }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "World Wide Web",
    };
  },
  methods: {
    to_void() {
      this.$router.push("/void")
    }
  }
};
</script>