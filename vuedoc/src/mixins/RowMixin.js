export default {
  props: ["name", "item"],
  computed: {
    /**
     * show description
     */
    description() {
      return this.item.description.replace(/\n/, "<br>");
    }
  }
}