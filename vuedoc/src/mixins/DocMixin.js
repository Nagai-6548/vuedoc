import MethodRow from '../components/MethodRow'
import DataRow from '../components/DataRow'
export default {
  computed: {
    selected() {
      return this.$store.state.vuedoc.selected;
    }
  },
  methods: {
    isExist(item) {
      if (typeof item === "function") {
        return item.length > 0;
      } else if (typeof item === "object") {
        return Object.keys(item).length > 0;
      } else {
        return !!item;
      }
    }
  },
  components: {
    MethodRow,
    DataRow,
  }
}