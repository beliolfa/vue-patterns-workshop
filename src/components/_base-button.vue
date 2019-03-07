<script>
export default {
  render(h) {
    return h(
      'button',
      {
        class: this.$style.button,
        on: {
          ...this.$listeners,
        },
      },
      this.$slots.default
    )
  },
}
</script>
<style lang="scss" module>
@import '@design';

.button {
  @extend %typography-small;

  padding: $size-button-padding;
  color: $color-button-text;
  cursor: pointer;
  background: $color-button-bg;
  border: none;

  &:disabled {
    cursor: not-allowed;
    background: $color-button-disabled-bg;
  }
}
</style>
