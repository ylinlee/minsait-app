<template>
  <div>
    <h1 class="mt-title mt-title--align-left mt-title--margin-bottom">{{ title }}</h1>
    <div
      v-for="item in accordionItems"
      :key=item.id
      class="mt-item mt-item--border-bottom"
    >
      <i
        :class="{
          'mt-arrow mt-arrow-margin-right': true,
          'mt-arrow--contracts': !item.isExpanded,
          'mt-arrow--expands': item.isExpanded
        }">
      </i>
      <label
        class="mt-label mt-label--align-left mt-label--margin"
        @click="onLabelClick(item)">
        {{ item.label || 'DefaultLabel' }}</label>
      <div
        :class="{ 
          'mt-slot-wrapper mt-slot-wrapper--padding': true,
          'mt-slot-wrapper--hidden': !item.isExpanded
        }">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mt-accordion',
  props: {
    title: {
      type: String,
      default: 'mt-accordion'
    },
    items: {
      type: Array,
      default: () => {
        return [];
      }
    },
    initialExpandedItem: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      accordionItems: []
    }
  },
  created () {
    this.accordionItems = this.items.map((item, index) => {
      return {
        ...item, ...{
          id: index,
          isExpanded: this.initialExpandedItem === index
        }
      }
    })
  },
  methods: {
    onLabelClick (item) {
      const currentItem = this.accordionItems[item.id]
      currentItem.isExpanded = !currentItem.isExpanded
      this.$set(this.accordionItems, item.id, currentItem)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin font-base {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
}
.mt-item {
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  &--border-bottom {
    border-bottom: solid 1px #dfe3e6;
  }
}
.mt-title {
  @include font-base;
  height: 68px;
  font-family: Roboto;
  font-size: 64px;
  font-weight: 300;
  line-height: 1.06;
  color: #152935;
  &--align-left {
    text-align: left;
  }
  &--margin-bottom {
    margin-bottom: 45px;
  }
}
.mt-arrow {
  @include font-base;
  border: solid #517489;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  &-margin-right {
    margin-right: 16.6px;
  }
  &--contracts {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  &--expands {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}
.mt-label {
  display: inline-block;
  height: 24px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: #517489;
  &--align-left {
    text-align: left;
  }
  &--margin {
    margin: 7px 0px 9px 0px;
  }
  &:hover {
    cursor: pointer;
  }
}
.mt-slot-wrapper {
  display: block;
  &--hidden {
    display: none;
  }
  &--padding {
    padding: 11px 18px 27px 22px;
  }
}
</style>
